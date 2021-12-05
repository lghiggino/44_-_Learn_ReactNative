import { View, Text } from 'dripsy'
import { LinkToRouteName } from './utils/CustomLinks'


export function GoodbyeWorld() {
  return (
    <View sx={{
      backgroundColor: ['red', 'green'],
      padding: [ '$2', '$3']
    }}>
      <Text>Goodbye, World!</Text>
      <View>
        <LinkToRouteName routeName="hello" webpath="hello" >
          <Text>Back to Index</Text>
        </LinkToRouteName>
      </View>
    </View>
  )
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   text: {
//     color: 'red'
//   },
//   buttonText:{
//     color: 'white'
//   },
//   button: {
//     paddingHorizontal: 12,
//     paddingVertical: 6,
//     backgroundColor: 'red',
//     borderRadius: 6,
//     marginVertical: 5
//   }
// })
