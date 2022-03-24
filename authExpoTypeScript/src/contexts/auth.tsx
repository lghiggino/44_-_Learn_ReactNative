import React, { createContext, useState, useEffect } from "react";
import * as auth from "../services/auth";

interface User {
  email: string;
  password: string;
}

interface AuthContextData {
  signed: boolean;
  user: User | null;
  signIn(credentials: object): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  async function signIn(credentials) {
    //chama o login no axios e passa as credenciais do form 
    const response = await auth.signIn(credentials);
    setUser(response.user);
  }

  async function signOut() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;