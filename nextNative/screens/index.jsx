// @generated: @expo/next-adapter@2.1.52
import React, { useState, useEffect } from 'react'
import { Platform, View, Text, StyleSheet, FlatList } from 'react-native'
import { Link as SimpleLink, useRouting } from 'expo-next-react-navigation'
import LinkToArtist from '../src/Utils/CustomLinks'
import { LinkToRouteName } from '../src/Utils/CustomLinks'
import axios from 'axios'
import PersonCard from '../src/Components/PersonCard'



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
            <View style={styles.container}>
                 <FlatList
                    style={styles.flatList}
                    showsVerticalScrollIndicator={true}
                    data={response}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <PersonCard name={item.name} email={item.email} />}
                />
            </View>
               
            }

        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 10,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100 %'
    },
    flatList: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',

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

