import React from "react";
import { TouchableOpacity, Text, StyleSheet, Platform } from "react-native";

export default function Button(props) {
    const { buttonText, onPress, primary, success, color, size, shape, ...rest } = props

    const styleMaker = () => {
        console.log("from StyleCreator")
        const inlineStyle = {
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 15,
            borderRadius: 4,
            elevation: 3,
        }
        switch (props.color) {
            case "primary":
                inlineStyle.backgroundColor = '#f92e6a'
                break
            case "success":
                inlineStyle.backgroundColor = '#4caf50'
                break
            case "danger":
                inlineStyle.backgroundColor = '#f44336'
                break
            default:
                inlineStyle.backgroundColor = '#999'
        }
        switch (props.size) {
            case "small":
                inlineStyle.maxWidth = "25%"
                break
            case "medium":
                inlineStyle.maxWidth = "50%"
                break
            case "large":
                inlineStyle.maxWidth = "75%"
                break
        }
        //switch(props.shape){}
        console.log(inlineStyle)
        return inlineStyle
    }

    return (
        <TouchableOpacity
            onPress={onPress}
            style={styleMaker()}
        >
            <Text
                style={styles.textLight}
            >
                {buttonText}
            </Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    default: {
        backgroundColor: '#999',
        paddingVertical: 10,
        paddingHorizontal: 20,
        maxWidth: 120
    },
    primary: {
        backgroundColor: '#f92e6a',
        paddingVertical: 10,
        paddingHorizontal: 20,
        maxWidth: 120
    },
    success: {
        backgroundColor: '#4caf50',
        paddingVertical: 10,
        paddingHorizontal: 20,
        maxWidth: 120
    },
    textLight: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#f5f5f5',
        borderColor: 'red',
        borderStyle: "solid",
        borderWidth: 2
    },
    textDark: {
        color: '#333',
        // marginLeft: 'auto',
        // marginRight: 'auto'
    }
})