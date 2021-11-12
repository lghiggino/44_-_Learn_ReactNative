import React from "react";
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from "react-native-gesture-handler";

export const Post = ({ id, title, body }) => (
    <TouchableOpacity>
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.body}>{body}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 10,
    },
    title: {
        fontSize: 16,
    },
    body: {
        fontSize: 12,
    }
});

export default Post