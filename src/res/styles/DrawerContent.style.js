import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    drawerHeader: {
        backgroundColor: '#473f98',
        height: Dimensions.get("window").height * 0.2,
        padding: 10
    },
    heading: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25
    },
    content: {
        flex: 3
    },
    labelStyle: {
        color: '#473f98',
        fontSize: 15,
        fontWeight: 'bold',
    }
});