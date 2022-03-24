import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#f5f5f5',
        paddingTop: Platform.OS === 'ios' ? 0 : 100
    },
    title:{
        textAlign: 'center',
        color: '#f92e6a',
        fontWeight: 'bold',
        fontSize: 36,
        marginBottom: 10
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
    loginButton:{
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 30,
        marginBottom: 20,
        backgroundColor: '#f92e6a',
        paddingHorizontal: 50,
        paddingVertical: 10,
        borderRadius: 5,
    },
    buttonText:{
        color: '#fff',
        fontWeight: 'bold'
    },
    contentAlert:{
        backgroundColor: '#aaa',
        paddingTop: 10,
        paddingBottom: 20,
        display: 'flex',
        flexDirection: 'row',
        alignContent: "center",
        justifyContent: "space-evenly",
        alignItems: 'baseline',
    },
    errorMessage:{
        color: '#f92e6a',
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
    register:{
        display: 'flex',
        flexDirection: 'row',
        alignContent: "center",
        justifyContent: "center",
        alignItems: 'baseline',
    },
    footerLabel:{
        color: '#aaa',
        fontWeight: 'bold',
        marginTop: 10
    },
    footerButton:{
        marginLeft: 10,
        color: '#f92e6a',
        textDecorationLine: 'underline',
        textDecorationColor: '#f92e6a',
        fontWeight: 'bold'
    }
})

export default styles