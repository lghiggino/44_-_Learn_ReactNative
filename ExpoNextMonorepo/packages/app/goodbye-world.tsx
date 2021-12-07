import { View, Text } from 'dripsy'
import { LinkToRouteName } from './utils/CustomLinks'


export function GoodbyeWorld() {
  return (
    <View sx={{
      backgroundColor: ['$background', '$secondary', '$accent', '$highlight'],
      padding: [ '$2', '$3', '$4', '$5']
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