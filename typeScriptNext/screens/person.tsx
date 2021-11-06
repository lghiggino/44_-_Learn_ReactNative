import React from "react";
import { View, Text } from "react-native";
import { useRouting } from 'expo-next-react-navigation'

export default function PersonScreen(){
    const { navigate, push, getParam, goBack } = useRouting()

    const id = getParam('id')
    const name = getParam('name')
    const email = getParam('email')


    console.log(id, name, email)

    return(
        <View>
            <Text>{id}</Text>
            <Text>Name:</Text>
            <Text>{name}</Text>
            <Text>Email:</Text>
            <Text>{email}</Text>
        </View>
    )
}