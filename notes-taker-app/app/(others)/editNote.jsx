import { View, Text, SafeAreaView, TextInput, TouchableOpacity, Pressable, Alert } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useLocalSearchParams, router } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import {useNotes} from "../../context/NotesContext";

const EditNote = () => {
    const { id, title, content } = useLocalSearchParams();
    const [updatedTitle, setUpdatedTitle] = useState(title);
    const [updatedContent, setUpdatedContent] = useState(content);
    const {updateNote} = useNotes();

    const handleUpdateNote = async () => {
        if (updatedTitle === title && updatedContent === content) {
            Alert.alert('No changes detected', 'Your note has not been updated because no changes were made.');
            return;
        }
        try {
            await updateNote(id,updatedTitle, updatedContent);
        }catch (error) {
            console.log(error.message);
        }

    };

    return (
        <SafeAreaView className={"w-full h-full px-6 bg-[#15042e]"}>
            <View className={"flex flex-row justify-start items-center gap-4 bg-[#15042e] my-4"}>
                <Pressable onPress={() => router.back()}>
                    <Ionicons name="arrow-back" size={30} color="#9b72cf" />
                </Pressable>
                <Text className={"text-[#9b72cf] font-semibold text-3xl"}>Edit Note</Text>
            </View>

            {/* Title Input */}
            <View>
                <TextInput
                    className={"text-4xl text-white"}
                    placeholder={"Title"}
                    placeholderTextColor="#888"
                    value={updatedTitle}
                    onChangeText={setUpdatedTitle}
                />
            </View>

            <View className={"w-full border-b-2 border-[#3a2c50]"}></View>

            {/* Content Input */}
            <View className={"flex-1"}>
                <TextInput
                    className={"text-xl flex-1 text-white"}
                    style={{ textAlignVertical: 'top' }}
                    placeholder={"Description"}
                    placeholderTextColor="#888"
                    value={updatedContent}
                    onChangeText={setUpdatedContent}
                    multiline={true}
                    numberOfLines={8}
                />
            </View>

            {/* Update Button */}
            <View className={"px-10 my-8 "}>
                <TouchableOpacity
                    onPress={handleUpdateNote}
                    className={"mt-6 px-8 py-4 bg-[#9b72cf] rounded-md"}
                >
                    <Text className={"text-white text-xl text-center"}>Update Note</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default EditNote;
