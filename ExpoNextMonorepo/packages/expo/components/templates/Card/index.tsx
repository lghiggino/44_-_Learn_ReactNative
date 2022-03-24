import React from 'react';
import { View, Text, Image, ImageProps, Pressable, PressableProps, StyleSheet, GestureResponderEvent } from 'react-native';

// import { Container } from './styles';

type ICard = {
    title: string,
    source: any,
    subtitle: string,
    onPress: any
    callToAction: string
}
const Card: React.FC<ICard> = ({ title, source, subtitle, onPress, callToAction }) => {
    return (
        <>
            <View>
                <View>{title}</View>
            </View>
            <View>
                <Text>Divider</Text>
            </View>
            <View>
                <Image
                    source={source}
                    style={styles.image}
                    resizeMode="cover"
                ></Image>
            </View>
            <View>
                <Text>{subtitle}</Text>
            </View>
            <View>
                <Pressable onPress={onPress}>
                    <Text>{callToAction}</Text>
                </Pressable>

            </View>
        </>
    );
}

export default Card;

const styles = StyleSheet.create({
    image: {
     
    },
    buttonText: { 
      
    },
    button: {
     
    }
  })
  