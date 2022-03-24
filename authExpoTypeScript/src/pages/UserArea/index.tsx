import React, { useContext } from "react";
import { View, Text, Button } from "react-native";
import AuthContext from "../../contexts/auth";

export default function UserArea({ navigation }) {
    const { user, signOut } = useContext(AuthContext);

    const handleSignOut = () => {
        signOut();
    }

    return (
        <>
            <View>
                <Text>Hello from UserArea</Text>
                <Text>{JSON.stringify(user, null, 2)}</Text>
            </View>
            <View>
                <Button title="Sign Out" onPress={handleSignOut} />
            </View>
        </>
    )
};
