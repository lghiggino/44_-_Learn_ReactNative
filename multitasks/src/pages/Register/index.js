import React, { useState, useEffect, useCallback } from "react";
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
import { getFirestore, collection, getDocs, query, where, doc, deleteDoc, setDoc } from 'firebase/firestore/lite';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../../config/firebaseconfig'
//estilos e icones
import styles from './style'
import { MaterialCommunityIcons } from '@expo/vector-icons'


export default function Register({ navigation }) {
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    async function firebaseCreateUser() {
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
        try {
            const auth = getAuth();
            const userCredential = await createUserWithEmailAndPassword(auth, user.email, user.password)
            const database = getFirestore(app)
            const docData = {
                description: 'Welcome to Multitasks. Have fun!',
                status: false,
                
            }
            const userUid = userCredential.user.uid
            const newDoc = await setDoc(doc(database, userUid, 'hello'), docData);
            navigation.navigate('Task', { userUid: userUid })
        } catch (error) {
            const errorMessage = error.message
            setError(true)
            setErrorMessage(errorMessage)
        }
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <Text style={styles.title}>MultiTasks</Text>
            <Text style={styles.subtitle}>Create a New Account</Text>

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
                    onPress={() => { firebaseCreateUser() }}

                >
                    <Text
                        style={styles.buttonText}
                    >
                        SIGN UP
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
        </KeyboardAvoidingView>
    )
}