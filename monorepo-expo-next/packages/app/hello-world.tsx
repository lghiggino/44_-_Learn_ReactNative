import { View, Text, StyleSheet } from 'react-native'

export function HelloWorld() {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Olá! João! Tudo bem com você?</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  h1:{
    fontSize: 22
  }
})
