import React from "react"
import { Link, useRouting } from "expo-next-react-navigation"
import { StyleSheet, View, Text } from "react-native"


export function ArtistScreen() {
    const { getParam } = useRouting()
    const slug = getParam("slug")

    return (
        <View style={styles.container}>
            <Text>This is the value of the slug from params: </Text>
            <Text style={styles.text}>{slug}</Text>
            <Link routeName="search">
                <Text>Go to Search Page</Text>
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 22,
    },
    link: {
        marginTop: 10,
        backgroundColor: "#a6d6c6",
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 5
    }
});