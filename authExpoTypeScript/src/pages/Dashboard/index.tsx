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
];

const Item = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);

export default function Dashboard({ navigation }) {
    const { user, signOut } = useContext(AuthContext);
    const [posts, setPosts] = useState([])
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

    const renderItem = ({ item }) => (
        <Item title={item.title} />
    );

    return (
        // <ScrollView>
        //     <View >
        //         <Text>email: {user?.email}</Text>
        //         <Text>password: {user?.password}</Text>
        //     </View>
        //     <View >
        //         <Text>Meiuca</Text>
        //     </View>
        //     <View>
        //         <Button title="Sign Out" onPress={handleSignOut} />
        //         <Button
        //             title="Go to UserArea"
        //             onPress={() => navigation.navigate('UserArea')}
        //         />
        //     </View>
        // </ScrollView>
        <SafeAreaView style={styles.container}>
            
            <ScrollView style={styles.scrollView}>
            <View>
                <Button title="Sign Out" onPress={handleSignOut} />
                <Button
                    title="Go to UserArea"
                    onPress={() => navigation.navigate('UserArea')}
                />
            </View>
                <Text style={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </Text>
            </ScrollView>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
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
        fontSize: 32,
    },
});

