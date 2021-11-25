import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { LinkToRouteName } from './utils/CustomLinks'


export function HelloWorld({ }) {
  return (
    <View style={styles.container}>
      <Text>Hello, World!</Text>
      <View style={styles.button}>
        <LinkToRouteName routeName="goodbye" webpath="goodbye" >
          <Text style={styles.buttonText}>TESTE DE LINKTOROUTENAME</Text>
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
    backgroundColor: '#660a32',
    borderRadius: 6,
    marginVertical: 5
  }
})
