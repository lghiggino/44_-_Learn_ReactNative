import React, { useContext } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { UserContext } from '../contexts/UserContext';

export default function HomeScreen() {
    const message = useContext(UserContext)
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Text>{message}</Text>
        </View>
    );
}

