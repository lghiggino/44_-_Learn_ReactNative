import React, { useState, useEffect } from "react";
import axios from "axios";
import { Platform, View, Text } from "react-native";
import { useRouting } from 'expo-next-react-navigation'

export default function PersonScreen({ person }) {
    const { navigate, push, getParam, goBack } = useRouting()

    const id = getParam('id')
    const name = getParam('name')
    const email = getParam('email')

    const [response, setResponse] = useState(null)
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(true)

    async function getAxiosUsers() {
        try {
            const usersFromAxios = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            setResponse(usersFromAxios.data)
        } catch (err) {
            setError(err)
        }
    }

    useEffect(() => {
        Platform.OS === 'web' ? setResponse(person) : getAxiosUsers()
        console.log("response", response)
    }, [])




    return (
        <View>
            <Text>{id || person.id}</Text>
            <Text>Name: {name || person.name}</Text>
            <Text>Email: {email || person.email}</Text>
            {person &&
                <Text>
                    {JSON.stringify(person, null, 4)}
                </Text>
            }
        </View>
    )
}