import React from "react";
import {SafeAreaView, View, Text } from "react-native"


//STYLES
import styles from './style'

export default function NewTask() {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Hello from NewTask</Text>
        </SafeAreaView>
    )
}