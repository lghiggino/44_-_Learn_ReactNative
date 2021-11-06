import React from "react";
import { Dimensions, StyleSheet, View, Text, TouchableOpacity } from "react-native"

export default function PersonCard({ name, email }) {

    return (
        <View style={styles.card}>
            <TouchableOpacity>
                <Text>{name}</Text>
                <Text>{email}</Text>
            </TouchableOpacity>
        </View>
    )
}

const screen = Dimensions.get("screen");
const styles = StyleSheet.create({
    card: {
        display: 'flex',
        borderColor: "#f4e1a8",
        borderWidth: 2,
        borderRadius: 10,
        marginVertical: 10,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        flexDirection: 'column',
        width: screen.width * 0.4,
    }
})