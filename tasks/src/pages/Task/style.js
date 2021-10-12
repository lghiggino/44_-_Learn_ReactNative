import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#aaa',
        paddingTop: 10
    },
    buttonNewTask:{
        position: 'absolute',
        width: 60,
        height: 60,
        backgroundColor:'#f92e6a',
        bottom:30,
        left:20,
        borderRadius:50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    iconButton:{
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold'
    },
    tasks:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5
    },
    deleteTask:{
        justifyContent: 'center',
        paddingLeft: 20
    },
    description:{
        width: '75%',
        alignContent: 'flex-start',
        backgroundColor: '#f5f5f5',
        padding: 10,
        paddingHorizontal: 20,
        borderRadius: 50,
        marginBottom: 5,
        marginRight: 15,
        color: '#666'
    }
})

export default styles