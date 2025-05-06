import {View, Text, SafeAreaView, TextInput, TouchableOpacity, Alert} from 'react-native'
import React, {useState} from 'react'
import axios from "../../api/axiosInstance";
import {useAuth} from "../../context/AuthContext";

const Home = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const {logout} = useAuth();

    const handleReset = () => {
        setTitle('');
        setDescription('');
    };

    const handleSave = async () => {
        if (!title.trim() || !description.trim()) {
            Alert.alert('Validation', 'Please enter both title and description.');
            return;
        }
        try {
            const response = await axios.post('/api/notes', {
                title,
                content: description,
            });

            Alert.alert('Success', 'Note saved successfully!');
            setTitle('');
            setDescription('');
        } catch (error) {
            console.error('Error saving note:', error);
            Alert.alert('Error', 'Failed to save note.');
        }
    };
  return (
    <SafeAreaView>
        <View>
            <Text>Create a Note</Text>
            <TouchableOpacity onPress={(e)=>logout()}>
                <Text>Log Out</Text>
            </TouchableOpacity>
        </View>
        <View>
            <TextInput
            placeholder={"Title"}
            value={title}
            onChangeText={setTitle}
            />
        </View>
        <View>
            <TextInput
            placeholder={"Description"}
            value={description}
            onChangeText={setDescription}
            multiline={true}
            numberOfLines={8}
            />
        </View>
        <View>
            <TouchableOpacity onPress={(e)=> handleSave()}>
                <Text>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleReset}>
                <Text>Reset</Text>
            </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

export default Home;