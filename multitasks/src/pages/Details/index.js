import React, { useState } from "react";
import { SafeAreaView, View, Text, TextInput, TouchableOpacity } from "react-native"

//Firebase
import { collection, getDocs, query, where, doc, setDoc } from 'firebase/firestore/lite';
import database from '../../config/firebaseconfig'

//STYLES
import styles from './style'
import { AntDesign } from '@expo/vector-icons';


export default function Details({ navigation, route }) {
    const [descriptionEdit, setDescriptionEdit] = useState(route.params.description)
    const [taskId, setTaskId] = useState(route.params.id)
    const [taskStatus, setTasksStatus] = useState(route.params.status)

    async function editTask() {
        const docData = {
            description: descriptionEdit,
            status: taskStatus
        }
        await setDoc(doc(database, 'tasks', taskId), docData);
        navigation.popToTop()
    }

    async function completeTask() {
        const docData = {
            description: descriptionEdit,
            status: !taskStatus
        }
        await setDoc(doc(database, 'tasks', taskId), docData);
        navigation.popToTop()
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.label}>Edit Task</Text>
            <TextInput
                style={styles.textInput}
                onChangeText={(text) => { setDescriptionEdit(text) }}
                value={descriptionEdit}
                multiline
            />
            <TouchableOpacity style={styles.buttonMarkCompleteTask}>
                <Text
                    onPress={() => { completeTask() }}
                    style={styles.buttonNewTaskText}
                >
                    Mark Complete
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonEditTask}>
                <Text
                    onPress={() => { editTask() }}
                    style={styles.buttonNewTaskText}
                >
                    Edit Task
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.buttonBack}
            >
                <Text
                    style={styles.iconButton}
                    onPress={() => {
                        navigation.popToTop()
                    }}
                >
                    <AntDesign
                        name="arrowleft"
                        size={23}
                        color="#fff"
                    />
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}