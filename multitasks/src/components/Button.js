import { TouchableOpacity, Text, StyleSheet, Platform } from "react-native";

export default function Button(){
    const {buttonText, onPress, ...rest} = props
    console.log(props)
    return(
        <TouchableOpacity
            onPress={onPress}
            style={}
        >
            <Text>
                {buttonText}
            </Text>
        </TouchableOpacity>
    )
}



const styles = StyleSheet.create({
    //colors:
    primary:{
        backgroundColor: '#f92e6a'
    },
    textPrimary:{
        color: '#f5f5f5'
    },
    light:{
        backgroundColor: '#fff'
    },
    textDark:{
        color: '#333'
    }
})