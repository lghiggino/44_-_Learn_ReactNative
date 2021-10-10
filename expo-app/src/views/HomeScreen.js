import React, { useContext } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNavigationStackNavigator } from '@react-navigation/native-stack';
//context
import { UserContext } from '../contexts/UserContext';
//utils
import Separator from "../components/Separator"

export default function HomeScreen({ navigation }) {
    const message = useContext(UserContext)
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Text>{message}</Text>
            <Separator />

            <Button
                title="Go to Details"
                onPress={() => {navigation.navigate('Details')}}
            />
            <Separator />

            <Button
                title="Go to RandomQuote"
                onPress={()=> {navigation.navigate('RandomQuote')}}
            />
            <Separator />
        </View>
    );
}

