import React, { useState, useEffect, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/core";
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    FlatList
} from "react-native"
//Firebase
import {getFirestore, collection, getDocs, query, where, doc, deleteDoc } from 'firebase/firestore/lite';
import app from '../../config/firebaseconfig'
//estilos e icones
import styles from './style'
import { FontAwesome } from '@expo/vector-icons'


export default function Register({navigation}){
    return(
        <SafeAreaView style={styles.container}>
            <Text>Tela de Registro</Text>
        </SafeAreaView>
    )
}