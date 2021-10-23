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
            <Button
                buttonText={"size = small"}
                onPress={() => { console.log("") }}
                color="success"
                size="small"
            />
            <Button
                buttonText={"size = medium"}
                onPress={() => { console.log("hello") }}
                color="danger"
                size="medium"
            />
            <Button
                buttonText={"size = large"}
                onPress={() => { console.log("hello") }}
                color="success"
                size="large"
            />
            <Button
                buttonText={"without size prop"}
                onPress={() => { console.log("hello") }}
                color="danger"
            />
        </SafeAreaView>
    )
}