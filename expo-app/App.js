import React, { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

//VIEWS
import RandomQuoteGenerator from "./src/views/RandomQuote"
import HomeScreen from './src/views/HomeScreen';
import DetailsScreen from './src/views/DetailsScreen';

//CONTEXT
import { UserContext } from './src/contexts/UserContext';

// function HomeScreen({ navigation }) {
//   const message = useContext(UserContext)
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//       <Text>{message}</Text>
//       <Button
//         title="Go to Details"
//         onPress={() => { navigation.navigate('Details') }}
//       />
//     </View>
//   );
// }


Stack = createNativeStackNavigator();

export default function App() {
  //https://reactnavigation.org/docs/params
  return (
    <UserContext.Provider value={"hello from context.provider"}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen} />
          <Stack.Screen
            name="Details"
            component={DetailsScreen}
            options={{ title: "Overview" }}
          />
          <Stack.Screen
            name="RandomQuote"
            component={RandomQuoteGenerator}
            options={{ title: "Quote Generator" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UserContext.Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.98,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    paddingLeft: 16,
    paddingRight: 16
  },
  heading: {
    fontSize: 24,
  },
  button: {
    marginBottom: 32
  }
});
