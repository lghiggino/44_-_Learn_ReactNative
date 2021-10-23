import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//VIEWS
import Register from './src/pages/Register';
import Login from './src/pages/Login';
import Task from './src/pages/Task/';
import NewTask from './src/pages/NewTask/';
import Details from './src/pages/Details/';
import Components from './src/pages/Components';
//Navigation
const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Components'>
        <Stack.Screen
          name='Login'
          component={Login}
          options={{ headerShown: false}}
          
        />
         <Stack.Screen
          name='Register'
          component={Register}
          options={{ headerShown: false}}
        />
        <Stack.Screen
          name='Task'
          component={Task}
          options={{ 
            headerTintColor: '#f92e6a',
            headerLeft: null
          }}
        />
        <Stack.Screen
          name='NewTask'
          component={NewTask}
          options={{ headerTintColor: '#f92e6a' }}
        />
        <Stack.Screen
          name='Details'
          component={Details}
          options={{ headerTintColor: '#f92e6a' }}
        />
        <Stack.Screen
          name='Components'
          component={Components}
          options={{ headerTintColor: '#f92e6a' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


//guardar o uniqueID no contexto?
//checar as regras de read, write
