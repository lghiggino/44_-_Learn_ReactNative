import React, { useContext } from "react";
import { View, Text } from "react-native";
import AuthContext from "../../contexts/auth";

export default function UserArea({ navigation }) {
    const { user, signOut } = useContext(AuthContext);

    return (
        <View>
            <Text>Hello from UserArea</Text>
        </View>
    )
};
