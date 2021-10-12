import React from "react";
import {SafeAreaView, View, Text } from "react-native"

//STYLES
import styles from './style'


export default function Details() {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Hello from Details</Text>
        </SafeAreaView>
    )
}