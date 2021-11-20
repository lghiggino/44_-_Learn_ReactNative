import { View, Text, H1, P, FlatList } from 'dripsy'
import { theme } from './theme'

const data = [
  {
    id: 1,
    title: "article 1",
    author: "Leonardo"
  },
  {
    id: 2,
    title: "title 2",
    author: "Joao"
  },
  {
    id: 3,
    title: "article 3",
    author: "Helaine"
  },

  {
    id: 4,
    title: "title 4",
    author: "Leon"
  },
  {
    id: 5,
    title: "article 5",
    author: "Adriano"
  },
]

const Item = ({ title }) => (
  <View >
    <Text >{title}</Text>
  </View>
);


export function HelloWorld() {

  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
    <>
      <View
        sx={{
          height: [150, 800, 1200],
          backgroundColor: '$primary',
          marginX: 0,
          marginTop: ['$4', 0]
        }}>
        <View>
          <P
          // sx={{
          //   fontSize: [$1, $2, $3], 
          //   // color: ['#333', $text, '$primary'], 
          // }}
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
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </>
  )
}
