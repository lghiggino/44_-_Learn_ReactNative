import React from 'react';

import { View, Text } from 'react-native';

import { styles } from './styles';
import Header from "../../components/template/Header"


export function Search() {
  return (
    <View style={styles.container}>
      <Header />
      <Text>Hello from Search Page</Text>
    </View>
  );
}