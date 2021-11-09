import React, { useContext, useState } from "react";
import { View, Button, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import AuthContext from "../../contexts/auth";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

const SignIn: React.FC = () => {
  const { signed, signIn, user } = useContext(AuthContext);
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  })
  console.log(signed);
  console.log(user);

  function handleSign() {
    signIn(credentials);
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={{paddingHorizontal: 10, paddingVertical: 20, borderColor: "green", borderWidth: 2, borderStyle: "solid", marginBottom: 20}}
        placeholder="enter your email"
        keyboardType="email-address"
        value={credentials.username}
        onChangeText={(text) => setCredentials({ ...credentials, username: text })}
      />
      <TextInput
        style={{paddingHorizontal: 10, paddingVertical: 20, borderColor: "green", borderWidth: 2, borderStyle: "solid", marginBottom: 20}}
        placeholder="enter your password"
        keyboardType="default"
        value={credentials.password}
        onChangeText={(text) => setCredentials({ ...credentials, password: text })}
      />
      <Button title="Sign In" onPress={handleSign} />
    </View>
  );
};

export default SignIn;