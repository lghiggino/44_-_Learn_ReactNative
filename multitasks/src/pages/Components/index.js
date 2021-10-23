import React from "react";
import {
    SafeAreaView,

} from "react-native"
//estilos e icones
import styles from './style'
//Components
import Button from "../../components/Button";


export default function Components({ navigation, route }) {
    return (
        <SafeAreaView style={styles.container}>
            <Button buttonText={"click me"} onPress={() => {console.log("hello")}} />
        </SafeAreaView>
    )
}