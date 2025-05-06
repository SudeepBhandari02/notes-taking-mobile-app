import {
    View,
    Text,
    SafeAreaView,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    RefreshControl,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from '../../api/axiosInstance';
import { useNavigation } from '@react-navigation/native';

const Saved = () => {
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();

    const fetchNotes = async () => {
        setLoading(true);
        try {
            const res = await axios.get('/api/notes');
            setNotes(res.data); // assuming res.data is an array of notes
        } catch (error) {
            console.error('Error fetching notes:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchNotes();
    }, []);

    const renderItem = ({ item }) => (
        <View style={styles.noteCard}>
            <Text style={styles.noteTitle}>{item.title}</Text>
            <Text style={styles.noteContent}>{item.content}</Text>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.heading}>Saved Notes</Text>

            <FlatList
                data={notes}
                keyExtractor={(item) => item._id}
                renderItem={renderItem}
                refreshControl={
                    <RefreshControl refreshing={loading} onRefresh={fetchNotes} />
                }
                ListEmptyComponent={
                    !loading && <Text style={styles.empty}>No notes available.</Text>
                }
            />

        </SafeAreaView>
    );
};

export default Saved;

const styles = StyleSheet.create({
    container: {
        padding: 16,
        flex: 1,
    },
    heading: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 12,
        textAlign: 'center',
    },
    noteCard: {
        backgroundColor: '#f4f4f4',
        padding: 14,
        borderRadius: 8,
        marginVertical: 8,
    },
    noteTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 6,
    },
    noteContent: {
        fontSize: 14,
        color: '#333',
    },
    backBtn: {
        marginTop: 20,
        alignItems: 'center',
    },
    backBtnText: {
        color: '#4682B4',
        fontWeight: 'bold',
        fontSize: 16,
    },
    empty: {
        textAlign: 'center',
        marginTop: 50,
        color: '#999',
    },
});
