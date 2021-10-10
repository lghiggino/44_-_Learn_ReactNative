import React, { useContext } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { UserContext } from '../contexts/UserContext';

function DetailsScreen() {
    const message = useContext(UserContext)
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Text>{message}</Text>
        </View>
    );
}

export default DetailsScreen