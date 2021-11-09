import React, { createContext, useState } from "react";
import * as auth from "../services/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AuthContextData {
  signed: boolean;
  user: object | null;
  signIn(credentials: object): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  console.log(AsyncStorage)
  const [user, setUser] = useState<object | null>(null);

  async function signIn(credentials) {
    console.log("credentials at context provider:", credentials)
    const response = await auth.signIn(credentials);
    setUser(response.user);

    await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(response.user));
    await AsyncStorage.setItem('@RNAuth:token', response.token);
  }

  function signOut() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;