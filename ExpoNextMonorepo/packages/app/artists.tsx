import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { LinkToRouteName } from './utils/CustomLinks'
import Card from '../expo/components/templates/Card'
import { Link, useRouting } from "expo-next-react-navigation"


type IItem = {
  "address": {
    "city": string,
    "geo": {
      "lat": string,
      "lng": string,
    },
    "street": string,
    "suite": string,
    "zipcode": string,
  },
  "company": {
    "bs": string,
    "catchPhrase": string,
    "name": string,
  },
  "email": string,
  "id": number,
  "name": string,
  "phone":string,
  "username": string,
  "website": string

}


export function Artists({ route }) {
  const { getParam } = useRouting()
  const item: IItem = getParam('item')
  console.log("item is", item)


  return (
    <>
      <View style={styles.container}>
        <Text>I'm artists page, baybay</Text>
        <View style={styles.button}>
          <LinkToRouteName routeName="hello" webpath="hello" >
            <Text style={styles.buttonText}>Voltar para Hello</Text>
          </LinkToRouteName>
        </View>
        <Text>{item.name}</Text>
        <Text>{item.email}</Text>
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

