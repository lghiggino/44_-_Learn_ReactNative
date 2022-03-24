// Use next.js page for the mobile app
//export { default } from './pages'

import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

//Screens
import { ArtistScreen } from "./screens/artist"
import { SearchScreen } from "./screens/search"
import IndexScreen from "./screens"
import PersonScreen from "./screens/person"

const { Navigator, Screen } = createNativeStackNavigator()

export default function App() {
    return (
        <NavigationContainer>
            <Navigator>
                <Screen name="index" component={IndexScreen} />
                <Screen name="search" component={SearchScreen} />
                <Screen name="artist" component={ArtistScreen} />
                <Screen name="person" component={PersonScreen} />
            </Navigator>
        </NavigationContainer>
    )
}