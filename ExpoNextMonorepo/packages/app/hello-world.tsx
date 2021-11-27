import { useEffect, useState } from 'react'
import axios from 'axios'
import { Dimensions, ScrollView, View, Text, StyleSheet, Pressable } from 'react-native'
import { LinkToRouteName } from './utils/CustomLinks'




export function HelloWorld({ }) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [artists, setArtists] = useState(null)

  async function getArtists() {
    try {
      setLoading(true)
      const response = await axios.get('https://jsonplaceholder.typicode.com/users')
      setArtists(response.data)
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getArtists()
  }, [])

  return (
    <ScrollView style={styles.container}>
      <Text>Hello, World!</Text>
      <Pressable style={styles.button}>
        <LinkToRouteName routeName="goodbye" webpath="goodbye" >
          <Text style={styles.buttonText}>TESTE DE LINKTOROUTENAME</Text>
        </LinkToRouteName>
      </Pressable>
      <Pressable style={styles.button}>
        <LinkToRouteName routeName="artists" webpath="artists" >
          <Text style={styles.buttonText}>Ir Para Artistas</Text>
        </LinkToRouteName>
      </Pressable>
      {loading &&
        <View>
          <Text>loading...</Text>
        </View>
      }
      {artists &&
        <View>
          <Text>{JSON.stringify(artists, null, 2)}</Text>
        </View>
      }
      {error &&
        <View>
          <Text>{error}</Text>
        </View>
      }

    </ScrollView>
  )
}

const { width } = Dimensions.get("window")
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonText: {
    color: 'white'
  },
  button: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: 'red',
    borderRadius: 6,
    marginVertical: 5,
    width: width/8
  }
})
