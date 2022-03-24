import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

//Screens
import { ArtistScreen } from "./screens/artist"
import { SearchScreen } from "./screens/search"
import TestScreen from "./screens/test"
import IndexScreen from "./screens"

const { Navigator, Screen } = createNativeStackNavigator()

export default function App() {
    return (
        <NavigationContainer>
            <Navigator>
                <Screen name="index" component={IndexScreen} />
                <Screen name="test" component={TestScreen} />
                <Screen name="search" component={SearchScreen} />
                <Screen name="artist" component={ArtistScreen} />
            </Navigator>
        </NavigationContainer>
    )
} 