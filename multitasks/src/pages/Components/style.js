import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#f5f5f5',
        paddingTop: Platform.OS === 'ios' ? 0 : 20,
    },
    buttonNewTask: {
        position: 'absolute',
        width: 60,
        height: 60,
        backgroundColor: '#f92e6a',
        bottom: 30,
        left: 20,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonLogOut:{
        position: 'absolute',
        width: 60,
        height: 60,
        backgroundColor: '#f92e6a',
        bottom: 30,
        right: 20,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconButton: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold'
    },
    tasks: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
        backgroundColor: '#fff'
    },
    deleteTask: {
        justifyContent: 'center',
        paddingLeft: 20
    },
    description: {
        width: '80%',
        alignContent: 'flex-start',
        // backgroundColor: '#f5f5f5',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginBottom: 5,
        marginRight: 20,
        color: '#666'
    },
    descriptionStriked:{
        width: '80%',
        alignContent: 'flex-start',
        // backgroundColor: '#f5f5f5',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginBottom: 5,
        marginRight: 20,
        color: '#666',
        textDecorationLine: "line-through"
    }
})

export default styles