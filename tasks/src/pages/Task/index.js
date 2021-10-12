import React, { useState, useEffect } from "react";
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    FlatList
} from "react-native"
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

import styles from './style'

import database from '../../config/firebaseconfig'


export default function Task() {
    const [tasks, setTasks] = useState([])

    async function getTasks(database) {
        const taskCol = collection(database, 'tasks');
        const taskSnapshot = await getDocs(taskCol);
        const taskList = taskSnapshot.docs.map(doc => doc.data());
        setTasks(taskList);
    }

    useEffect(() => {
        (async() => {
            await getTasks(database)
        })()
    }, [])

    return (
        <View>
            <Text>Hello from Task</Text>
            <Text>{JSON.stringify(tasks, null, 2)}</Text>
        </View>
    )
}