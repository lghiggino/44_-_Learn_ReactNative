import React from 'react'
import { enableScreens } from 'react-native-screens'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { DripsyProvider } from 'dripsy'

import { theme } from 'app/theme'
import { HelloWorld } from 'app/PageScreens/hello-world'
import postView from 'app/PageScreens/postView'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
const { Navigator, Screen } = createNativeStackNavigator()

enableScreens(true)

export default function App() {
  return (
    <DripsyProvider theme={theme}>
      <SafeAreaProvider>
        <Navigator>
          <Screen name="helloWorld" component={HelloWorld} />
          <Screen name="postView" component={postView} />

        </Navigator>
      </SafeAreaProvider>
    </DripsyProvider>
  )
}
