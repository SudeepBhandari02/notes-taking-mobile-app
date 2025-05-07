import { View, Text, SafeAreaView, ScrollView, Pressable } from 'react-native';
import React from 'react';
import { useLocalSearchParams, router } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

const NoteViewer = () => {
    const { title, content } = useLocalSearchParams();

    return (
        <SafeAreaView className="flex-1 bg-[#15042e] px-6">
            <View className="flex flex-row items-center gap-4 my-4">
                <Pressable onPress={() => router.back()}>
                    <Ionicons name="arrow-back" size={30} color="#9b72cf" />
                </Pressable>
                <Text className="text-3xl font-semibold text-[#9b72cf]">Note Viewer</Text>
            </View>

            <ScrollView className="flex-1 mt-4">
                <Text className="text-white text-4xl font-bold mb-2">{title}</Text>
                <View className={"w-full my-2  border-b-2 border-[#3a2c50]"}></View>
                <Text className="text-gray-300 text-xl leading-7 mt-2">{content}</Text>
            </ScrollView>
        </SafeAreaView>
    );
};

export default NoteViewer;
