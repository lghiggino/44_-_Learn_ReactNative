import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#f5f5f5',
        paddingTop: Platform.OS === 'ios' ? 0 : 20
    },
    label:{
        width: '90%',
        marginTop: 20,
        marginLeft: 20,
        fontSize: 16,
        color: '#f92e6a',
        marginBottom: 10
    },
    textInput:{
        backgroundColor: '#f5f5f5',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#f92e6a',
        marginLeft: 20,
        marginRight: 20
    },
    buttonBack:{
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
    buttonNewTask:{
        position: 'absolute',
        right: 20,
        top: 160,
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor:'#f92e6a',
        borderRadius:5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonNewTaskText:{
        color: '#fff',
        fontWeight: 'bold'
    }

})

export default styles