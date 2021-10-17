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
import { getFirestore, collection, getDocs, query, where, doc, deleteDoc } from 'firebase/firestore/lite';
import { getAuth, signOut } from "firebase/auth";
import app from '../../config/firebaseconfig'
//estilos e icones
import styles from './style'
import { FontAwesome } from '@expo/vector-icons'


export default function Task({ navigation, route }) {
    const database = getFirestore(app)
    const [userUniqueDatabase, setUserUniqueDatabase] = useState(route.params.userUid)
    const [tasks, setTasks] = useState([])

    console.log(userUniqueDatabase)

    async function getTasks() {
        const list = []
        const taskCol = collection(database, userUniqueDatabase);
        const taskSnapshot = await getDocs(taskCol);
        taskSnapshot.forEach(task => {
            list.push({ ...task.data(), id: task.id })
        })
        setTasks(list);
    }

    async function logout() {
        const auth = getAuth();
        signOut(auth).then(() => {
            navigation.navigate('Login')
        }).catch((error) => {
            console.log(error)
        });
    }

    useFocusEffect(
        useCallback(() => {
            getTasks()
        }, [])
    )

    async function deleteTask(id) {
        await deleteDoc(doc(database, userUniqueDatabase, id));
        //reload the list
        getTasks()
    }

    return (
        <SafeAreaView style={styles.container}>
            {tasks &&
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={tasks}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.tasks}>
                                <TouchableOpacity
                                    style={styles.deleteTask}
                                    onPress={() => {
                                        deleteTask(item.id)
                                    }}
                                >
                                    <FontAwesome
                                        name='trash'
                                        size={23}
                                        color='#f92e6a'
                                    />
                                </TouchableOpacity>
                                <Text style={item.status === true ? styles.descriptionStriked : styles.description}
                                    onPress={() => {
                                        navigation.navigate('Details', {
                                            id: item.id,
                                            description: item.description,
                                            status: item.status,
                                            userUid: userUniqueDatabase,
                                        })
                                    }}
                                >
                                    {item.description}
                                </Text>
                            </View>
                        )
                    }}
                />
            }

            <TouchableOpacity
                style={styles.buttonNewTask}
                onPress={() => { navigation.navigate('NewTask') }}
            >
                <Text style={styles.iconButton}>
                    +
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonLogOut}
                onPress={() => { logout() }}
            >
                <Text style={styles.iconButton}>
                    L
                </Text>
            </TouchableOpacity>

            {/* <Text>
                {JSON.stringify(tasks, null, 2)}
            </Text> */}
        </SafeAreaView>
    )
}