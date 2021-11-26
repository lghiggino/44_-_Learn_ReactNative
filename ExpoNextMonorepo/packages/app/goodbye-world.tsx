import { View, Text, StyleSheet } from 'react-native'
import { LinkToRouteName } from './utils/CustomLinks'


export function GoodbyeWorld() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Goodbye, World!</Text>
      <View style={styles.button}>
        <LinkToRouteName routeName="hello" webpath="hello" >
          <Text style={styles.buttonText}>Back to Index</Text>
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
  text: {
    color: 'red'
  },
  buttonText:{
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
