import React from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
    Dimensions
} from "react-native"
//estilos e icones
// import styles from './style'

export default function Flex() {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={styles.header}>
                    <Text style={styles.nameText}>React Native School</Text>
                    <Text style={styles.followText}>Follow</Text>
                </View>
                <Image
                    style={styles.image}
                    resizeMode="cover"
                    source={{ uri: "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?cs=srgb&dl=pexels-michael-block-3225517.jpg&fm=jpg" }}
                />
                <View style={styles.footer}>
                    <Text>
                        <Text style={styles.nameText}>{`React Native School `}</Text>
                        This has been a tutorial on how to build a layout with Flexbox. I
                        hope you enjoyed it!
                    </Text>
                </View>
            </View>
        </View>
    );
}


const screen = Dimensions.get("screen");
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#7CA1B4",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    card: {
        backgroundColor: "#fff",
        width: screen.width * 0.8
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    footer:{
        paddingHorizontal: 15,
        paddingVertical: 10
    },
    nameText: {
        fontWeight: "bold",
        color: "#20232a",
    },
    followText: {
        fontWeight: "bold",
        color: "#0095f6",
    },
    image: {
        height: screen.width * 0.8,
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
    }
});