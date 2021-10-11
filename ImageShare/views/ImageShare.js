import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker'
import * as Sharing from 'expo-sharing'
import uploadToAnonymousFilesAsync from 'anonymous-files';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function ImageShare({ selectedImage, setSelectedImage, navigation }) {

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
    }

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: selectedImage.localUri }}
                style={styles.thumbnail}
            />
            <TouchableOpacity
                onPress={openShareDialogAsync}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Share this photo</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={clearPhoto}
                style={styles.button}
            >
                <Text style={styles.buttonText}>Clear Photo</Text>
            </TouchableOpacity>
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
        borderRadius: 5
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
