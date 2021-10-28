import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Index from "./pages/index"
import Test from "./pages/test"
import { ArtistScreen } from "./screens/artist"
import { SearchScreen } from "./screens/search"

const { Navigator, Screen } = createNativeStackNavigator()

export default function App() {
    return (
        <NavigationContainer>
            <Navigator>
                <Screen name="search" component={SearchScreen} />
                <Screen name="artist" component={ArtistScreen} />
            </Navigator>
        </NavigationContainer>
    )
}