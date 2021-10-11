import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker'
import * as Sharing from 'expo-sharing'
import uploadToAnonymousFilesAsync from 'anonymous-files';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null)

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

  }

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

  

  if (selectedImage !== null) {
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
      </View>
    )
  } else {
    return (
      <View style={styles.container}>
        <Image source={{ uri: 'https://i.imgur.com/TkIrScD.png' }} style={styles.logo} />
        <Text style={styles.instructions}>To share a photo from your phone with a friend, just press the button below!</Text>
        <TouchableOpacity
          onPress={openImagePickerAsync}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Pick a photo</Text>
        </TouchableOpacity>
        <StatusBar style='auto' />
      </View>
    );
  }



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
