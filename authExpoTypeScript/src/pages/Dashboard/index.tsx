import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, Text, FlatList, SafeAreaView, ScrollView, View, StatusBar, Button } from "react-native";
import AuthContext from "../../contexts/auth";


const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
    {
        id: 'bd7acdfb-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Fourth Item',
    }
];

const Item = ({ title, body }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.body}>{body}</Text>
    </View>
);

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
        <Item title={item.title} body={item.body} />
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

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight / 2 || 0,
    },
    scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 10,
    },
    text: {
        fontSize: 42,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 10,
    },
    title: {
        fontSize: 16,
    },
    body:{
        fontSize: 12,
    }
});

