import React, {createContext, useState, useEffect, useContext} from 'react';
import { saveToken, getToken, deleteToken } from '../utils/storage';
import axios from '../api/axiosInstance';
import { router } from 'expo-router';
import {Alert} from "react-native";
import {AuthContext} from "./AuthContext";

export const NotesContext = createContext();
export const useNotes = () => useContext(NotesContext);

export const NotesProvider = ({ children }) => {
    const handleSave = async (title,description) => {
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
        } catch (error) {
            console.error('Error saving note:', error);
            Alert.alert('Error', 'Failed to save note.');
        }
    };

    const fetchNotes = async () => {
        try {
            const res = await axios.get('/api/notes');
            return (res.data);
        } catch (error) {
            console.error('Error fetching notes:', error);
        }
    };

    const deleteNote = async (noteId) => {
        if (!noteId) {
            Alert.alert('Error', 'Invalid note ID.');
            return;
        }

        try {
            await axios.delete(`/api/notes/${noteId}`);
            Alert.alert('Success', 'Note deleted successfully!');
        } catch (error) {
            console.error('Error deleting note:', error);
            Alert.alert('Error', 'Failed to delete note.');
        }
    };

    const updateNote = async (id,updatedTitle,updatedContent) => {
        try {
            const response = await axios.put(`/api/notes/${id}`, {
                title: updatedTitle,
                content: updatedContent,
            });

            if (response.status === 200) {
                Alert.alert('Success', 'Note updated successfully!');
                router.back();
            } else {
                Alert.alert('Failed', 'Server Error!');
                throw new Error('Failed to update note');
            }
        } catch (error) {
            console.error('Error updating note:', error);
            Alert.alert('Error', 'Failed to update the note. Please try again.');
        }
    }

    return (
        <NotesContext.Provider value={{  handleSave , deleteNote ,fetchNotes ,updateNote }}>
            {children}
        </NotesContext.Provider>
    );
}