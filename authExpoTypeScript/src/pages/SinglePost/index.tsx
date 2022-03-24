import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function SinglePost({ route }) {
    const {id, title, body} = route.params

    return (
        <View style={styles.container}>
            <Text>Hello from Single Post</Text>
            <Text>{id}</Text>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.body}>{body}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title:{
        fontSize: 24,
        textAlign: 'center'
    },
    body:{
        fontSize:16,
        textAlign: 'justify'
    }
})