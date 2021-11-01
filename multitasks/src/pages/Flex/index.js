import React from "react";
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text

} from "react-native"
//estilos e icones
// import styles from './style'

export default function Flex() {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.square} />
                <View style={[styles.square, { alignSelf: "flex-end" }]} />
                <View style={styles.square} />
                <View style={[styles.square, { alignSelf: "flex-start" }]} />
                <View style={styles.square} />
                <View style={styles.line} />
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#7CA1B4",
        flex: 1,
        alignItems: "center", // ignore this - we'll come back to it
        justifyContent: "space-between", // ignore this - we'll come back to it
        flexDirection: "column",
        flexWrap: "wrap"
    },
    square: {
        backgroundColor: "#7cb48f",
        width: "31%",
        height: 100,
        margin: 4,
    },
    line: {
        backgroundColor: "#3da57f",
        width: "98%",
        height: 100,
        marginHorizontal: 4,
    }
});