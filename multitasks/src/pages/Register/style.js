import { StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        paddingTop: Platform.OS === 'ios' ? 0 : 100
    },
    title: {
        textAlign: 'center',
        color: '#f92e6a',
        fontWeight: 'bold',
        fontSize: 36,
        marginBottom: 10
    },
    subtitle: {
        textAlign: 'center',
        color: '#f92e6a',
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 10
    },
    label: {
        width: '90%',
        marginTop: 20,
        marginLeft: 'auto',
        fontSize: 16,
        color: '#f92e6a',
        marginBottom: 10
    },
    textInput: {
        backgroundColor: '#f5f5f5',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f92e6a',
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    loginButton: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: '#f92e6a',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold'
    },
    contentAlert: {
        backgroundColor: '#aaa',
        paddingTop: 10,
        paddingBottom: 20,
        display: 'flex',
        flexDirection: 'row',
        alignContent: "center",
        justifyContent: "space-evenly",
        alignItems: 'baseline',
    },
    errorMessage: {
        color: '#f92e6a',
    },
    buttonBack: {
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
    footer: {
        backgroundColor: '#aab',
        position: 'absolute',
        bottom: 0,
        width: '100%'
    },
    footerLabel: {
        marginLeft: 'auto',
        marginRight: 'auto',
        color: '#fff',
        fontWeight: 'bold',
        marginTop: 10
    },
    footerButton: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 20,
        marginBottom: 20,
        backgroundColor: '#f92e6a',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
    }
})

export default styles