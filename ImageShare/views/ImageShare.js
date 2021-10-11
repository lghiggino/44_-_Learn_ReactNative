import React, { useEffect, useState, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker'
import * as Sharing from 'expo-sharing'
import uploadToAnonymousFilesAsync from 'anonymous-files';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SelectedImageContext } from '../context/SelectImage';
import Button from '../components/Button';


export default function ImageShare({ navigation }) {
    const { selectedImage, setSelectedImage } = useContext(SelectedImageContext)
    let openShareDialogAsync = async () => {
        if (!(await Sharing.isAvailableAsync())) {
            alert(`The image is available for sharing at: ${selectedImage.remoteUri}`);
            return
        }

        await Sharing.shareAsync(selectedImage.localUri);
    }

    let clearPhoto = () => {
        if (Platform.OS === 'web') {
            let remoteUri = null
            setSelectedImage({ localUri: null, remoteUri });
        } else {
            setSelectedImage({ localUri: null, remoteUri: null });
        }
        navigation.popToTop()
    }

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: selectedImage.localUri }}
                style={styles.thumbnail}
            />
            <Button
                onPress={openShareDialogAsync}
                text="Share this photo"
            />

            <Button
                onPress={clearPhoto}
                text="Clear Photo"
            />

            <StatusBar style='auto' />
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
    button: {
        backgroundColor: '#a3e5f8',
        padding: 20,
        borderRadius: 5,
        marginBottom: 10
    },
    buttonText: {
        fontSize: 20,
        color: '#fff'
    },
    thumbnail: {
        width: 300,
        height: 300,
        resizeMode: 'contain'
    }
});
