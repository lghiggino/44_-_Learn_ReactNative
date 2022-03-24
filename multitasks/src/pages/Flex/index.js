import React from "react"
import { StyleSheet, Dimensions, View, Text } from "react-native"

export default function Flex() {
    return (
        <View style={styles.container}>
            <View style={[styles.box, { backgroundColor: "green", flex: 1 }]}></View>
            <View style={[styles.box, { backgroundColor: "yellow", flex: 2 }]}></View>
            <View style={[styles.box, { backgroundColor: "red", flex: 1 }]}></View>
        </View>
    )
}

const screen = Dimensions.get("screen");
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#7CA1B4",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    box:{
        height: screen.height,
        width: 100
    }
})