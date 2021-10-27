// Use next.js page for the mobile app
// export { default } from './pages'
import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Index from "./pages/index"
import Test from "./pages/test"

const { Navigator, Screen } = createNativeStackNavigator()

export default function App() {
    return (
        <NavigationContainer>
            <Navigator>
                <Screen name="index" component={Index} />
                <Screen name="test" component={Test} />
            </Navigator>
        </NavigationContainer>
    )
}