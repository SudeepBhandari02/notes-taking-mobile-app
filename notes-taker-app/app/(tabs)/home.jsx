import {View, Text, SafeAreaView, TextInput, TouchableOpacity, Alert} from 'react-native'
import React, {useState} from 'react'
import {useAuth} from "../../context/AuthContext";
import {useNotes} from '../../context/NotesContext';

const Home = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const {logout} = useAuth();
    const {handleSave} = useNotes();

    const handleReset = () => {
        setTitle('');
        setDescription('');
    };


  return (
    <SafeAreaView className={"w-full h-full px-6 bg-[#15042e]"}>
        <View className={"flex flex-row justify-between  items-center gap-28 bg-[#15042e] my-4"}>
            <Text className={"text-[#9b72cf] font-semibold text-3xl"}>Create a Note</Text>
            <TouchableOpacity className={"px-4 py-2 rounded-lg bg-[#d0342c]"} onPress={(e)=>logout()}>
                <Text className={"text-white"}>Log Out</Text>
            </TouchableOpacity>
        </View>
        <View>
            <TextInput
                className={"text-4xl text-white"}
                placeholder={"Title"}
                placeholderTextColor="#888"
                value={title}
                onChangeText={setTitle}
            />
        </View>
        <View className={"w-full  border-b-2 border-[#3a2c50]"}></View>
        <View className={"flex-1"}>
            <TextInput
                className={"text-xl flex-1 text-white "}
                style={{ textAlignVertical: 'top' }}
            placeholder={"Description"}
            placeholderTextColor="#888"
            value={description}
            onChangeText={setDescription}
            multiline={true}
            numberOfLines={8}
            />
        </View>
        <View className={"w-full flex flex-row justify-center items-center gap-4 absolute mx-6 my-4 bottom-1"}>

            <TouchableOpacity className={"h-12 bg-[#f3f945] rounded-lg flex-1 items-center justify-center"} onPress={handleReset}>
                <Text className={"font-semibold text-xl text-[#15042e]"}>Reset</Text>
            </TouchableOpacity>
            <TouchableOpacity className={"h-12 bg-[#f3f945] rounded-lg flex-1 items-center justify-center"} onPress={(e)=> {
                handleSave(title,description);
                handleReset();
            }}>
                <Text className={"font-semibold text-xl text-[#15042e]"}>Save</Text>
            </TouchableOpacity>

        </View>
    </SafeAreaView>
  )
}

export default Home;