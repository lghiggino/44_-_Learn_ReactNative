import React from "react";
import { Link, useRouting } from "expo-next-react-navigation"
import { StyleSheet, View, Text } from "react-native";
import LinkToArtist from '../src/Utils/CustomLinks'
import { LinkToRouteName } from "../src/Utils/CustomLinks";

export function SearchScreen() {
    return (
        <View style={styles.container}>
            <Text>Search screen</Text>
            <LinkToArtist slug="banana">
                <Text>Go to Artist Banana Page</Text>
            </LinkToArtist>
            <LinkToArtist slug="apple">
                <Text>Go to Artist Apple Page</Text>
            </LinkToArtist>
            <LinkToRouteName 
                routeName={"artist"}
                slug="pineapple"
                webpath={"artist"}
            >
                <Text>Go to Pineapple Page</Text>
            </LinkToRouteName>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 16,
    },
    link: {
        marginTop: 10,
        backgroundColor: "#a6d6c6",
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 5
    }
});