import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    row: {
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        // width: "200%",
    },
    column: {
        display: "flex",
        flexDirection: "row",
        flexBasis: "100%",
        flex: 1,
    },
    blueColumn:{
        backgroundColor: "blue",
        height: 600,
        
    },
    greenColumn: {
        backgroundColor: "green",
        height: 600,
        
    },
    redColumn:{
        backgroundColor: "red",
        height: 600,
    }
})


export default styles