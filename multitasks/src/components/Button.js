import React from "react";
import { TouchableOpacity, Text, StyleSheet, Platform } from "react-native";
import PropTypes from 'prop-types'
//CSSMAPS
import { colorMap } from "../utils/cssMaps";
import { widthMap } from "../utils/cssMaps";
import { borderRadiusMap } from "../utils/cssMaps";

export default function Button(props) {
    const { buttonText, onPress, color, size, shape, ...rest } = props

    const styleMaker = (props) => {
        //base Style
        const inlineStyle = {
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 15,
            elevation: 8,
        }

        inlineStyle.backgroundColor = colorMap[props.color] || '#999'
        inlineStyle.maxWidth = widthMap[props.size] || "100%"
        inlineStyle.borderRadius = borderRadiusMap[props.shape] || 5

        return inlineStyle
    }

    return (
        <TouchableOpacity
            onPress={onPress}
            style={styleMaker(props)}
        >
            <Text
                style={styles.textLight}
            >
                {buttonText}
            </Text>
        </TouchableOpacity>
    )
}


Button.propTypes = {
    buttonText: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    color: PropTypes.oneOf(['primary', 'success', 'danger']),
    size: PropTypes.oneOf(['micro', 'small', 'medium', 'large']),
    shape: PropTypes.oneOf(['soft', 'round'])
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