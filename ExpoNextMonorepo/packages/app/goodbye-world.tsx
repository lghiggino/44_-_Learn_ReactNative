import { View, Text, StyleSheet } from 'react-native'

export function GoodbyeWorld() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Goodbye, World!</Text>
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
      color: '#68100d'
  }
})
