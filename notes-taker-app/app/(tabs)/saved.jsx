import {
    View,
    Text,
    SafeAreaView,
    FlatList,
    TouchableOpacity,
    RefreshControl, Alert,
} from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React, { useState} from 'react';
import {useNotes} from "../../context/NotesContext";
import {useAuth} from "../../context/AuthContext";
import {router, useFocusEffect} from "expo-router";

const Saved = () => {
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(false);
    const {deleteNote, fetchNotes } = useNotes();
    const { logout } = useAuth();

    const getNotesData = async () => {
        try {
            setLoading(true);
            const data = await fetchNotes();
            setNotes(data);
        } catch (error) {
            console.error("Error fetching notes:", error);
        } finally {
            setLoading(false);
        }
    }

    useFocusEffect(
        React.useCallback(() => {
            getNotesData();
        }, [])
    );

    const renderItem = ({ item }) => (
        <TouchableOpacity
            className={"flex flex-row justify-between items-center bg-[#9b72cf] my-2 rounded-md p-4"}
            onPress={() => router.push({ pathname: "/noteViewer", params: { id: item._id, title: item.title, content: item.content } })}
        >
            <View>
                <Text className={"text-xl text-gray-900 font-semibold "}>
                    {item.title.length > 20
                    ? item.title.substring(0, 20) + ' ...'
                    : item.title}
                </Text>
                <Text className={"text-md text-gray-700"}>
                    {item.content.length > 25
                        ? item.content.substring(0, 25) + ' ...'
                        : item.content}
                </Text>
            </View>
            <View className={"flex flex-row justify-center items-center gap-6 mr-2"}>
                <TouchableOpacity
                    className="h-14 w-14 border-2 rounded-full flex items-center justify-center"
                    onPress={() => router.push({ pathname: "/editNote", params: { id: item._id, title: item.title, content: item.content } })}
                >
                    <Feather name="edit-3" size={24} color="#111827" />
                </TouchableOpacity>
                <TouchableOpacity className={"h-14 w-14 border-2 rounded-full flex items-center justify-center"}
                onPress={() =>
                    Alert.alert(
                        `Delete ${item.title}`,
                        'Are you sure you want to delete this note?',
                        [
                            {text: 'Cancel', style: 'cancel'},
                            {text: 'Delete', onPress: async () => {
                                    await deleteNote(item._id);
                                    await getNotesData();
                                }
                                },
                        ]
                    )


                }
                >
                    <MaterialIcons name="delete" size={24} color="#111827" />
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView className={"w-full h-full px-6 bg-[#15042e]"}>
            <View className={"flex flex-row justify-between  items-center gap-28 bg-[#15042e] my-4"}>
                <Text className={"text-[#9b72cf] font-semibold text-3xl"}>Saved Notes</Text>
                <TouchableOpacity className={"px-4 py-2 rounded-lg bg-[#d0342c]"} onPress={(e)=>logout()}>
                    <Text className={"text-white"}>Log Out</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={notes}
                keyExtractor={(item) => item._id}
                showsVerticalScrollIndicator={false}
                renderItem={renderItem}
                refreshControl={
                    <RefreshControl refreshing={loading} onRefresh={getNotesData} />
                }
                ListEmptyComponent={
                    !loading && <Text className={"font-bold text-2xl text-white mt-10"}>No notes available.</Text>
                }
            />

        </SafeAreaView>
    );
};

export default Saved;
