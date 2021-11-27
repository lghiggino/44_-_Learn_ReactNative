import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { LinkToRouteName } from './utils/CustomLinks'


export function Artists({ }) {
  return (
    <View style={styles.container}>
      <Text>I'm artists page, baybay</Text>
      <View style={styles.button}>
        <LinkToRouteName routeName="hello" webpath="hello" >
          <Text style={styles.buttonText}>Voltar para Hello</Text>
        </LinkToRouteName>
      </View>
    </View>
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
