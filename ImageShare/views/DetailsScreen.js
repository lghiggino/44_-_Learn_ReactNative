import React, { useContext } from "react";
import { View, Text } from "react-native";
import { SelectedImageContext } from "../context/SelectImage";

export default function DetailsScreen() {
    const {selectedImage, setSelectedImage} = useContext(SelectedImageContext)
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Text>{JSON.stringify(selectedImage)}</Text>
        </View>
    );
}