import React from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
    Dimensions
} from "react-native"

export default function Flex() {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.innerContainer}>
                    <View style={styles.square}>
                        <Text style={styles.text}>A</Text>
                    </View>
                    <View style={styles.square}>
                        <Text style={styles.text}>B</Text>
                    </View>
                    <View style={styles.square}>
                        <Text style={styles.text}>C</Text>
                    </View>
                    <View style={styles.square}>
                        <Text style={styles.text}>D</Text>
                    </View>
                    <View style={styles.square}>
                        <Text style={styles.text}>E</Text>
                    </View>
                    <View style={styles.square}>
                        <Text style={styles.text}>F</Text>
                    </View>
                    <View style={styles.square}>
                        <Text style={styles.text}>G</Text>
                    </View>
                    <View style={styles.square}>
                        <Text style={styles.text}>H</Text>
                    </View>
                    <View style={styles.square}>
                        <Text style={styles.text}>I</Text>
                    </View>
                </View>
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#7CA1B4",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
    },
    innerContainer: {
        backgroundColor: "#7CA1B4",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        flexWrap: "wrap"
    },
    square: {
        backgroundColor: "transparent",
        width: 100,
        height: 100,
        borderStyle: "solid",
        borderColor: "white",
        borderWidth: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    line: {
        backgroundColor: "#3da57f",
        width: "98%",
        height: 100,
        marginHorizontal: 4,
    },
    text: {
        color: "white",
        textTransform: "uppercase"
    }
});
