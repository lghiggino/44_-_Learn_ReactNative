import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

export default function Button({ text, onPress }) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.button}
        >
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#a3e5f8',
        padding: 20,
        borderRadius: 8,
        marginTop: 4,
        marginBottom: 12,
    },
    buttonText: {
        fontSize: 20,
        color: '#fff'
    }
});
