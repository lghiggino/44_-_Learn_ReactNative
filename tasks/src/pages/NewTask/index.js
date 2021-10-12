import React, { useState } from "react";
import { SafeAreaView, View, Text, TextInput, TouchableOpacity } from "react-native"

//Firebase
import { collection, getDocs, query, where, doc, setDoc } from 'firebase/firestore/lite';
import database from '../../config/firebaseconfig'

//STYLES
import styles from './style'

export default function NewTask({ navigation }) {
    const [newTask, setNewTask] = useState("")

    async function addTask() {
        const docData = {
            description: newTask,
            status: false,
        }
        // database.collection('tasks').add(docData)
        await setDoc(doc(database, 'tasks', newTask.split(" ").join("")), docData);
        navigation.navigate('Task')
    }
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.label}>Description</Text>
            <TextInput
                style={styles.textInput}
                onChangeText={(text) => { setNewTask(text) }}
                value={newTask}
                placeholder="Create a New Task here"
                multiline
            />
            <TouchableOpacity style={styles.buttonNewTask}>
                <Text
                    onPress={() => { addTask() }}
                >
                    Create
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.buttonBack}
            >
                <Text
                    style={styles.iconButton}
                    onPress={() => {
                        setNewTask("")
                        navigation.popToTop()
                    }}
                >
                    back
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}