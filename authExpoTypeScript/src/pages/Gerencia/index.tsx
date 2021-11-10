import React, { useContext, useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import AuthContext from "../../contexts/auth";

export default function Gerencia({ navigation }) {
    const { user, signOut } = useContext(AuthContext);

    const handleSignOut = () => {
        signOut();
    }

    const loadData= (user) => {
        //aqui entra o axios puxando os dados e passando user.password
    }

    return (
        <>
            <View>
                <Text>Hello from Gerencia</Text>
                <Text>{JSON.stringify(user, null, 2)}</Text>
            </View>
            <View>
                <Button title="Sign Out" onPress={handleSignOut} />
            </View>
        </>
    )
};
