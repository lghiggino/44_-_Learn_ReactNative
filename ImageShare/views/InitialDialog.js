import React, { useState, useContext } from 'react';
import { Platform, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as ImagePicker from 'expo-image-picker'
import uploadToAnonymousFilesAsync from 'anonymous-files';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SelectedImageContext } from '../context/SelectImage';
import ImageShare from './ImageShare';

//components
import Button from '../components/Button';

export default function InitialDialog({ navigation }) {
    const { selectedImage, setSelectedImage } = useContext(SelectedImageContext)
    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (permissionResult.granted === false) {
            alert('Permission to access camera roll is required for the app to work properly!');
            return
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync();

        if (pickerResult.cancelled === true) {
            return
        }

        if (Platform.OS === 'web') {
            let remoteUri = await uploadToAnonymousFilesAsync(pickerResult.uri);
            setSelectedImage({ localUri: pickerResult.uri, remoteUri });
        } else {
            setSelectedImage({ localUri: pickerResult.uri, remoteUri: null });
        }

        selectedImage && navigation.navigate('ImageShare')

    }
    return (
        <View style={styles.container}>
            <StatusBar style='auto' />
            <Image source={{ uri: 'https://i.imgur.com/TkIrScD.png' }} style={styles.logo} />
            <Text style={styles.instructions}>To share a photo from your phone with a friend, just press the button below!</Text>
            <Button
                onPress={openImagePickerAsync}
                text="Pick a photo"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',
    },
    logo: {
        width: 305,
        height: 159,
        marginBottom: 10
    },
    instructions: {
        color: '#888',
        fontSize: 18,
        marginHorizontal: 15
    },
    thumbnail: {
        width: 300,
        height: 300,
        resizeMode: 'contain'
    }
});
