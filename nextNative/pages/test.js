// @generated: @expo/next-adapter@2.1.52
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useRouting } from 'expo-next-react-navigation';
import { Link } from 'expo-next-react-navigation';

export default function Test({ useRouting }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>This is the test page</Text>
            <Link routeName="index" style={styles.link}>
                <Text>Go to Index page</Text>
            </Link>
        </View>
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
