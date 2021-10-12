import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#aaa',
        paddingTop: 10
    },
    label:{
        width: '90%',
        marginTop: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: 16,
        color: '#f92e6a'
    },
    textInput:{
        backgroundColor: '#f5f5f5',
        paddingVertical: 15,
        paddingHorizontal: 20
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
        width: 60,
        height: 60,
        backgroundColor:'#f92e6a',
        borderRadius:5,
        justifyContent: 'center',
        alignItems: 'center'
    }

})

export default styles