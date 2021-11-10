import React, { useContext } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import AuthContext from "../../contexts/auth";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
});

export default function Dashboard({ navigation }) {
    const { user, signOut } = useContext(AuthContext);

    function handleSignOut() {
        signOut();
    }

    return (
        <View style={styles.container}>
            <Text>email: {user?.email}</Text>
            <Text>password: {user?.password}</Text>
            <Button title="Sign Out" onPress={handleSignOut} />
            <Button
                title="Go to UserArea"
                onPress={() => navigation.navigate('UserArea')}
            />
        </View>
    );
};
