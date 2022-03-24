import React from "react";
import {
    SafeAreaView,
    Text

} from "react-native"
//estilos e icones
import styles from './style'
//Components
import Button from "../../components/Button";


export default function Components({ navigation, route }) {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Button Sizes</Text>
            <Button
                buttonText={"size = micro"}
                onPress={() => { console.log("") }}
                color="primary"
                size="micro"
            />
            <Button
                buttonText={"size = small"}
                onPress={() => { console.log("") }}
                color="secondary"
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
                color="warning"
            />

            <Text>Button Shapes</Text>
            <Button
                buttonText={"shape = round"}
                onPress={() => { console.log("hello") }}
                color="success"
                size="medium"
                shape="round"
            />
            <Button
                buttonText={"without shape prop"}
                onPress={() => { console.log("hello") }}
                color="warning"
                size="
                medium"
            />
        </SafeAreaView>
    )
}