// @generated: @expo/next-adapter@2.1.52
import React, { useState, useEffect } from 'react'
import { Platform, View, Text, StyleSheet } from 'react-native'
import { Link as SimpleLink, useRouting } from 'expo-next-react-navigation'
import LinkToArtist from '../src/Utils/CustomLinks'
import { LinkToRouteName } from '../src/Utils/CustomLinks'
import axios from 'axios'



export default function IndexScreen({ usersFromStaticProps }) {
    console.log("usersFromStaticProps", usersFromStaticProps)
    const [response, setResponse] = useState(null)
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(true)

    async function getAxiosUsers() {
        try {
            const usersFromAxios = await axios.get("https://jsonplaceholder.typicode.com/users")
            setResponse(usersFromAxios.data)
        } catch (err) {
            setError(err)
        }
    }

    useEffect(() => {
        Platform.OS === 'web' ? setResponse(usersFromStaticProps) : getAxiosUsers()
    }, [])

    // agora precisa descobrir como fazer as rotas dinamicas serem construidas via o id do getStaticProps
    return (
        <>
            <View
                style={styles.container}
            >
                <Text style={styles.text}>Welcome to Expo + Next.js 👋 !!!</Text>
                <SimpleLink routeName="test" style={styles.link}>
                    <Text>Go to Test page</Text>
                </SimpleLink>
                <SimpleLink routeName="search" style={styles.link}>
                    <Text>Go to Search page</Text>
                </SimpleLink>
                <LinkToArtist slug="banana">
                    <Text>Go to Artist Banana Page</Text>
                </LinkToArtist>
                <LinkToArtist slug="apple">
                    <Text>Go to Artist Apple Page</Text>
                </LinkToArtist>
                <LinkToRouteName
                    routeName={"artist"}
                    slug="pineapple"
                    webpath={"artist"}
                >
                    <Text>Go to Pineapple Page</Text>
                </LinkToRouteName>
            </View>
            {response &&
                <View
                    style={styles.container}
                >
                    <Text>{response[0].name}</Text>
                    <Text>{response[1].name}</Text>
                    <Text>{response[2].name}</Text>
                    <Text>{response[3].name}</Text>
                    <Text>{response[4].name}</Text>
                    <Text>{response[5].name}</Text>
                    <Text>{response[6].name}</Text>
                    <Text>{response[7].name}</Text>
                    <Text>{response[8].name}</Text>
                    <Text>{response[9].name}</Text>
                </View>
            }

        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 16,
    },
    link: {
        marginTop: 10,
        backgroundColor: "#a6d6c6",
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 5
    }
});

