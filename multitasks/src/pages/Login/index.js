import React, { useState, useEffect, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/core";
import {
    SafeAreaView,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
    KeyboardAvoidingView,
    Platform
} from "react-native"
//Firebase
import { getFirestore, collection, getDocs, query, where, doc, deleteDoc } from 'firebase/firestore/lite';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from '../../config/firebaseconfig'
//estilos e icones
import styles from './style'
import { FontAwesome } from '@expo/vector-icons'


export default function Login({ navigation }) {
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const [errorLogin, setErrorLogin] = useState("")

    function firebaseLogin() {
        console.log(user)
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <Text style={styles.title}>MultiTasks</Text>

            <View>
                <Text style={styles.label}>Email</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='enter your email'
                    type='email'
                    value={user.email}
                    onChangeText={(text) => setUser({ ...user, email: text })}
                />
                <Text style={styles.label}>Senha</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='enter your password'
                    type='text'
                    secureTextEntry
                    value={user.password}
                    onChangeText={(text) => setUser({ ...user, password: text })}
                />
                <TouchableOpacity
                    onPress={() => { firebaseLogin() }}

                >
                    <Text>ENTRAR</Text>
                </TouchableOpacity>
            </View>

            <View>
                <Text style={styles.label}>
                    Não possui login?
                </Text>
                <TouchableOpacity
                    onPress={() => { navigation.navigate('Register') }}
                >
                    <Text>Clique aqui para se registrar</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}