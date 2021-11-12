import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, Text, FlatList, SafeAreaView, ScrollView, View, StatusBar, Button } from "react-native";
import AuthContext from "../../contexts/auth";
import Post from "../../components/Post";

export default function Dashboard({ navigation }) {
    const { user, signOut } = useContext(AuthContext);
    const [posts, setPosts] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(
        {
            state: false,
            message: ""
        }
    )

    function handleSignOut() {
        signOut();
    }

    async function getPosts() {
        try {
            setLoading(true)
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
            setPosts(response.data)
        } catch (error) {
            setError({ state: true, message: `Error getting Posts` })
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getPosts()
        console.log("posts?", posts)
    }, [])

    const renderItem = ({ item }) => (
        <Post title={item.title} body={item.body} />
    );

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Button title="Sign Out" onPress={handleSignOut} />
                <Button
                    title="Go to UserArea"
                    onPress={() => navigation.navigate('UserArea')}
                />
            </View>
            {loading &&
                <View>
                    <Text>...loading...</Text>
                </View>
            }
            {posts &&
                <FlatList
                    data={posts}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            }
            {error &&
                <View>
                    <Text>{error.message}</Text>
                </View>
            }

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight / 2 || 0,
    }
});

