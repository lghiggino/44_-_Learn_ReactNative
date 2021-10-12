import React, { useState, useEffect } from "react";
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    FlatList
} from "react-native"
import { collection, getDocs } from 'firebase/firestore/lite';
import database from '../../config/firebaseconfig'
//estilos e icones
import styles from './style'
import { FontAwesome } from '@expo/vector-icons'




export default function Task({ navigation }) {
    const [tasks, setTasks] = useState([])

    async function getTasks(database) {
        const list = []
        const taskCol = collection(database, 'tasks');
        const taskSnapshot = await getDocs(taskCol);
        taskSnapshot.forEach(task => {
            list.push({ ...task.data(), id: task.id })
        })
        setTasks(list);
    }

    useEffect(() => {
        getTasks(database)
    }, [])


    async function deleteTask(id) {
        await database.collection('tasks').doc(id).delete()
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
                                <Text style={styles.description}
                                    onPress={() => {
                                        navigation.navigate('Details', {
                                            id: item.id,
                                            description: item.description
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

           
        </SafeAreaView>
    )
}