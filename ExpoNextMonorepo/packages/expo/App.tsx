// import React from 'react'
// import { enableScreens } from 'react-native-screens'
// import { StatusBar } from 'expo-status-bar'
// import { SafeAreaProvider } from 'react-native-safe-area-context'
// import { DripsyProvider } from 'dripsy'

// import { theme } from 'app/theme'
// import { HelloWorld } from 'app/hello-world'

// enableScreens(true)

// export default function App() {
//   return (
//     <DripsyProvider theme={theme}>
//       <SafeAreaProvider>
//         <StatusBar style="dark" />
//         <HelloWorld />
//       </SafeAreaProvider>
//     </DripsyProvider>
//   )
// }
import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

//Screens
// import { ArtistScreen } from "./screens/artist"
// import { SearchScreen } from "./screens/search"
// import TestScreen from "./screens/test"
// import IndexScreen from "./screens"

import { HelloWorld } from 'app/hello-world'
import { GoodbyeWorld } from 'app/goodbye-world'

const { Navigator, Screen } = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="hello" component={HelloWorld} />
        <Screen name="goodbye" component={GoodbyeWorld} />
      </Navigator>
    </NavigationContainer>
  )
}