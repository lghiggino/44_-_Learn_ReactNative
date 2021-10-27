// @generated: @expo/next-adapter@2.1.52
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { Link, useRouting } from 'expo-next-react-navigation'

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Expo + Next.js 👋</Text>
      <Link routeName="test" style={styles.link}>
        <Text>Go to Test page</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
  },
  link:{
    marginTop:10,
    backgroundColor: "#a6d6c6",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5
  }
});
