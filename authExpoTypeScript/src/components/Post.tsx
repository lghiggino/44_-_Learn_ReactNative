import React from "react";
import { View, Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from "react-native-gesture-handler";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export const Post = ({ id, title, body, navigation }) => (
    <TouchableOpacity 
        onPress={() => {navigation.navigate("SinglePost", {
            id,
            title,
            body
        })}}
    >
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