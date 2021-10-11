import React, { useContext } from "react";
import { View, Text } from "react-native";
import { SelectedImageContext } from "../context/SelectImage";

export default function HomeScreen() {
    const {selectedImage, setSelectedImage} = useContext(SelectedImageContext)
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Text>{JSON.stringify(selectedImage)}</Text>
      </View>
    );
  }