import { Platform, Dimensions, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { LinkToRouteName } from './utils/CustomLinks'
import Card from '../expo/components/templates/Card'
import { Link, useRouting } from "expo-next-react-navigation"


type IItem = {
  "address": {
    "city": string,
    "geo": {
      "lat": string,
      "lng": string,
    },
    "street": string,
    "suite": string,
    "zipcode": string,
  },
  "company": {
    "bs": string,
    "catchPhrase": string,
    "name": string,
  },
  "email": string,
  "id": number,
  "name": string,
  "phone": string,
  "username": string,
  "website": string

}


export function Artists() {
  const { getParam } = useRouting()
  const item: string = getParam('item')
  console.log("item is", item, "banana")
  console.log(typeof (item))

  const parsedItem: IItem = JSON.parse(item)
  console.log(parsedItem)


  return (
    <>
      <View style={styles.container}>
        {item &&
          <>
            <View style={styles.card}>
              <View style={styles.cardBackgroundImage}></View>
              <View style={{ flexDirection: 'row' }}>
                <View style={styles.cardAvatarImage}></View>
                <View style={styles.cardAvatarLettering}>
                  <Text style={{ color: 'white' }}>{parsedItem.name}</Text>
                  <Text style={{ color: 'white' }}>{parsedItem.email}</Text>
                </View>
              </View>
              <View style={styles.cardButtonContainer}>
                <View style={styles.cardButton}><Text style={styles.cardButtonText}>Follow</Text></View>
                <View style={styles.cardButton}><Text style={styles.cardButtonText}>Message</Text></View>
              </View>
              <View style={styles.cardFooter}>
                <View style={styles.cardFooterFollowersText}></View>
                <View style={styles.cardFooterFollowersAvatars}>
                  <View style={styles.cardFooterFollowersAvatarsImages}></View>
                  <View style={styles.cardFooterFollowersAvatarsImagesExtra}></View>
                </View>
              </View>

            </View>
            <View style={styles.button}>
              <LinkToRouteName routeName="hello" webpath="hello" >
                <Text style={styles.buttonText}>{"<"}</Text>
              </LinkToRouteName>
            </View>
            {/* <Text>{JSON.stringify(item)}</Text> */}
          </>
        }
      </View>

      {/* <Card key={item.id} title={item.name} source={'https://picsum.photos/200'} subtitle={item.email} onPress={alert(item.city)} callToAction='say Hello' /> */}

    </>
  )
}

//usar o dripsy ao invés de width para fazer as larguras nas telas


const { width } = Dimensions.get('screen')
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
  },
  card: {
    width: width - 24,
    maxWidth: 400,
    // paddingHorizontal: 10,
    height: 440,
    backgroundColor: 'red',
    borderRadius: 12,
    flexDirection: 'column'
  },
  cardBackgroundImage: {
    width: '100%',
    backgroundColor: 'blue',
    height: 160,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  cardAvatarImage: {
    width: 120,
    height: 120,
    marginLeft: 24,
    backgroundColor: 'yellow',
    position: 'relative',
    bottom: 50,
    borderRadius: 100
  },
  cardAvatarLettering: {
    width: Platform.OS === "web" ? (400 - 216) : (width - 216),
    marginLeft: 24,
    height: 70,
    backgroundColor: 'green'
  },
  cardButtonContainer: {
    flexDirection: "row",
    backgroundColor: 'purple',
    width: Platform.OS === "web" ? 400 : (width - 24),
    height: 40,
    position: 'relative',
    bottom: 30,
    justifyContent: 'space-around'
  },
  cardButton: {
    backgroundColor: 'white',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 20,
    minWidth: 140
  },
  cardButtonText: {
    textAlign: 'center'
  },
  cardFooter: {
    backgroundColor: 'pink',
    flexDirection: "column",
    width: Platform.OS === "web" ? 400 : (width - 24),
    height: 100,
  },
  cardFooterFollowersText: {

  },
  cardFooterFollowersAvatars: {

  },
  cardFooterFollowersAvatarsImages: {

  },
  cardFooterFollowersAvatarsImagesExtra: {

  },
})

