import React from "react";
import { TouchableOpacity, Text, StyleSheet, Platform } from "react-native";
import PropTypes from 'prop-types'

export default function Button(props) {
    const { buttonText, onPress, color, size, shape, ...rest } = props

    const styleMaker = () => {
        // console.log("from StyleCreator")
        const inlineStyle = {
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 15,
            elevation: 8,
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
            case "micro":
                inlineStyle.maxWidth = "25%"
                break
            case "small":
                inlineStyle.maxWidth = "33%"
                break
            case "medium":
                inlineStyle.maxWidth = "50%"
                break
            case "large":
                inlineStyle.maxWidth = "75%"
                break
        }
        switch(props.shape){
            case "round":
                inlineStyle.borderRadius = 50
            break
            default:
                inlineStyle.borderRadius = 5
        }
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


Button.PropTypes = {
    buttonText: PropTypes.string, 
    onPress: PropTypes.func, 
    color?: PropTypes.oneOf(['primary', 'success', 'danger']), 
    size?: PropTypes.oneOf(['micro', 'small', 'medium', 'large']), 
    shape?: PropTypes.oneOf(['round'])
}

const styles = StyleSheet.create({
    textLight: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#f5f5f5'
    },
    textDark: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#333'
    }
})