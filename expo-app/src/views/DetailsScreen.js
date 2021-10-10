import React, { useContext } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { UserContext } from '../contexts/UserContext';
import { NavigationContainer } from '@react-navigation/native';
import { createNavigationStackNavigator } from '@react-navigation/native-stack';
import Separator from "../components/Separator"

export default function DetailsScreen({ navigation }) {
    const message = useContext(UserContext)
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
            <Text>{message}</Text>
            <Separator />
            <Button
                title="Back One"
                onPress={() => { navigation.goBack() }}
            />
            <Separator />
            <Button
                title="Go to Details... again"
                onPress={() => navigation.push('Details')}
                color="#e41584"
            />
            <Separator />
            <Button
                title="Go back to first screen in stack - popToTop"
                onPress={() => navigation.popToTop()}
                color="#e47584"
            />
            <Separator />
            <Button
                title="Home"
                color="#d5d5d5"
                onPress={() => { navigation.navigate("Home") }}
            />
        </View>
    );
}
