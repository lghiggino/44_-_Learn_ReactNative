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
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from '../../config/firebaseconfig'
//estilos e icones
import styles from './style'
import { MaterialCommunityIcons } from '@expo/vector-icons'


export default function Login({ navigation }) {
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    function firebaseLogin() {
        if (!user.email) {
            setError(true)
            setErrorMessage("Must provide an email")
            return
        }
        if (!user.password) {
            setError(true)
            setErrorMessage("Must provide a password")
            return
        }


        const auth = getAuth();
        signInWithEmailAndPassword(auth, user.email, user.password)
            .then((userCredential) => {
                const user = userCredential.user;
                navigation.navigate('Task', {
                    userUid: user.uid,
                })
            })
            .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message
                setError(true)
                setErrorMessage(errorMessage)
            })
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
                <Text style={styles.label}>Password</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder='enter your password'
                    type='text'
                    secureTextEntry
                    value={user.password}
                    onChangeText={(text) => setUser({ ...user, password: text })}
                />
                <TouchableOpacity
                    style={styles.loginButton}
                    onPress={() => { firebaseLogin() }}

                >
                    <Text
                        style={styles.buttonText}
                    >
                        LOGIN
                    </Text>
                </TouchableOpacity>
            </View>

            {error &&
                <View style={styles.contentAlert}>
                    <MaterialCommunityIcons
                        name='alert-circle'
                        size={24}
                        color='#fff'
                        style={styles.alertCircle}
                    />
                    <Text style={styles.errorMessage}>{errorMessage}</Text>
                </View>
            }

            <View style={styles.register}>
                <Text
                    style={styles.footerLabel}
                >
                    Don't have a login?
                </Text>

                <Text
                    onPress={() => { navigation.navigate('Register') }}
                    style={styles.footerButton}
                >
                    Register Now
                </Text>
            </View>


        </KeyboardAvoidingView>
    )
}