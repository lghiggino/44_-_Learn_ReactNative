import { useEffect, useState } from 'react'
import axios from 'axios'
import { Platform, Dimensions, ScrollView, View, Text, StyleSheet, Pressable } from 'react-native'
import { LinkToRouteName } from './utils/CustomLinks'
import { Link, useRouting } from 'expo-next-react-navigation'



export function HelloWorld({ }) {
  const { navigate } = useRouting()
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
          {artists.map(item => (
            <Pressable style={styles.button} onPress={() => {
              navigate({
               routeName: 'artists',
               params: {id: item.id},
               web: { as: `/artists/${item.id}` }
              })
            }}>
              {/* <Link
                routeName="artists" web={{
                  path: `artists/${item.id}`
                }}
                params={{
                  item
                }}
              > */}
                <Text>Ir para {item.name}</Text>
              {/* </Link> */}
              {/* <LinkToRouteName routeName="artists" webpath="artists" slug={item.id}>
                <Text>Ir para {item.name}</Text>
              </LinkToRouteName> */}
            </Pressable>
          ))}
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
    width: Platform.OS === 'web' ? width / 8 : 200
  }
})
