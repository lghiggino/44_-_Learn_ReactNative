import { View, Text } from 'dripsy'
import { LinkToRouteName } from './utils/CustomLinks'


export function GoodbyeWorld() {
  return (
    <View sx={{
      backgroundColor: ['$background', '$secondary', '$accent', '$highlight'],
      padding: ['$2', '$3', '$4', '$7'],
      margin: ['$2', '$3', '$4', '$7']
    }}>
      <Text
        sx={{
          color: ['$text', '$lightText']
        }}
      >
        Goodbye, World!
      </Text>
      <View>
        <LinkToRouteName routeName="hello" webpath="hello" >
          <Text
            sx={{
              color: ['$text', '$lightText']
            }}
          >
            Back to Index
          </Text>
        </LinkToRouteName>
      </View>
    </View>
  )
}