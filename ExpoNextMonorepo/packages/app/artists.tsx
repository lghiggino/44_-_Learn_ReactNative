import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { LinkToRouteName } from './utils/CustomLinks'
import Card from '../expo/components/templates/Card'
import { Link, useRouting } from "expo-next-react-navigation"



export function Artists({ route }) {
  const { getParam } = useRouting()
  const id = getParam('id')
  console.log("id is: ",id)


  return (
    <>
      <View style={styles.container}>
        <Text>I'm artists page, baybay</Text>
        <View style={styles.button}>
          <LinkToRouteName routeName="hello" webpath="hello" >
            <Text style={styles.buttonText}>Voltar para Hello</Text>
          </LinkToRouteName>
        </View>
      </View>

      {/* <Card key={item.id} title={item.name} source={'https://picsum.photos/200'} subtitle={item.email} onPress={alert(item.city)} callToAction='say Hello' /> */}

    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: 'white'
  },
  button: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: 'red',
    borderRadius: 6,
    marginVertical: 5
  }
})

