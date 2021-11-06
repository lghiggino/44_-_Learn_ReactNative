import React from "react";
import { Dimensions, StyleSheet, View, Text, TouchableOpacity } from "react-native"
import { LinkToRouteName } from "../Utils/CustomLinks";
import { useRouting } from 'expo-next-react-navigation'

import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

const { Navigator, Screen } = createNativeStackNavigator()

export default function PersonCard({ id, name, email }) {
    const { navigate, push, getParam, goBack } = useRouting()

    const navigateCleanLinkWithParam = (id, name, email) =>
        navigate({
            routeName: 'person',
            params: { id, name: name, email: email }, // accessed with getParam in the next screen
            web: { as: `/person/${id}` },
        })

    return (
        <View style={styles.card}>
            {/* <LinkToRouteName
                routeName={"person"}
                id={id}
                name={name}
                email={email}
                webpath={`person/${id}?name=${name}?email=${email}`} 
            >*/}

                    <TouchableOpacity
                        onPress={() => {
                            navigateCleanLinkWithParam(id, name, email)
                        }}
                    >
                        <Text>{name}</Text>
                        <Text>{email}</Text>
                    </TouchableOpacity>

            {/* </LinkToRouteName> */}
        </View>
    )
}

const screen = Dimensions.get("screen");
const styles = StyleSheet.create({
    card: {
        display: 'flex',
        borderColor: "#f4e1a8",
        borderWidth: 2,
        borderRadius: 10,
        marginVertical: 10,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        flexDirection: 'column',
        width: screen.width * 0.4,
    }
})