import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Separator from './src/components/Separator';

export default function App() {
  const [counter, setCounter] = useState(0)
  const [quote, setQuote] = useState("")
  const [author, setAuthor] = useState("")

  useEffect(() => {
    (async () => {
      getQuote()
    })()
  }, [])

  async function getQuote() {
    try {
      const response = await axios.get("https://goquotes-api.herokuapp.com/api/v1/random?count=1")

      setQuote(response.data.quotes[0].text)
      setAuthor(response.data.quotes[0].author)
    } catch (error) {
      console.error(error)
      setQuote(error.message)
    }

  }
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Random Quote Generator</Text>
      <Separator />
      <Button
        title="generate random quote"
        color="#841584"
        onPress={() => {
          getQuote()
        }}
        style={styles.button}
      />
      <Separator />
      <Separator />

      <Text>{quote}</Text>
      <Separator />
      <Text>{author}</Text>

      <StatusBar style="auto" />
    </View>
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
