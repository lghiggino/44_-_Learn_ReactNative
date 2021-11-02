import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native"

export default function PersonCard({ name, email }) {

    return (
        <View style={styles.card}>
            <Text>{name}</Text>
            <Text>{email}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    card: {
        display: 'flex',
        flexGrow: 1,
        // flex: 1,
        // justifyContent: "center",
        // alignContent: "space-around",
        // alignItems: "center",
        borderColor: "#f4e1a8",
        borderWidth: 2,
        borderRadius: 10,
        marginVertical: 10,
        marginHorizontal: 10,
        maxWidth: "80%",
        display: 'flex',
        flexDirection: 'column',
        flexBasis: '100 %',
        flex: 1,
    }
})