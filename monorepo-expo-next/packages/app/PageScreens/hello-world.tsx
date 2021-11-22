import { View, Text, H1, P, FlatList } from 'dripsy'
import { theme } from '../theme'


export function HelloWorld() {
  return (
      <View
        sx={{
          height: [150, 400, 600],
          backgroundColor: '$primary',
          marginX: 0,
          marginTop: ['$4', 0]
        }}>
        <View>
          <P
          sx={{
            fontSize: [theme.fontSizes.$1, theme.fontSizes.$2, theme.fontSizes.$3],  //this sucks balls
            // color: ['#333', $text, '$primary'], 
          }}
          >
            Responsive font size?? 🤯
          </P>
        </View>
        <View>
          {/* <Text sx={{
          // fontSize: [14, $2, $3], 
          // color: ['#333', $text, '$primary'], 
        }} */}
          <H1>
            Olá! João! Tudo bem com você?
          </H1>
        </View>
      </View>
  )
}
