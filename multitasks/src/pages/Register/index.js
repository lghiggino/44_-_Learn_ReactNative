import React, { useState, useEffect, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/core";
import {
    SafeAreaView,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    FlatList,
    KeyboardAvoidingView
} from "react-native"
//Firebase
import { getFirestore, collection, getDocs, query, where, doc, deleteDoc } from 'firebase/firestore/lite';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from '../../config/firebaseconfig'
//estilos e icones
import styles from './style'
import { FontAwesome } from '@expo/vector-icons'


export default function Register({ navigation }) {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <Text>Tela de Registro</Text>

            <View>
                <Text>
                    Já possui login?
                </Text>
                <TouchableOpacity
                    onPress={() => { navigation.navigate('Login') }}
                >
                    <Text>Clique aqui para entrar</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}