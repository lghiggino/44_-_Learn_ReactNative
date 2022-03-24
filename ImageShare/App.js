import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//context provider
import { SelectedImageContext } from './context/SelectImage';
//views
import InitialDialog from './views/InitialDialog';
import ImageShare from './views/ImageShare';
import HomeScreen from './views/HomeScreen';
import DetailsScreen from './views/DetailsScreen';

//navigation
const Stack = createNativeStackNavigator()

export default function App() {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <SelectedImageContext.Provider value={{selectedImage, setSelectedImage}}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={InitialDialog} />
          <Stack.Screen name="ImageShare" component={ImageShare} />
        </Stack.Navigator>
      </NavigationContainer>
    </SelectedImageContext.Provider>
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
