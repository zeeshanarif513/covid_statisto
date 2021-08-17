import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-evenly",
        padding: 10,
        backgroundColor: '#473f98',
    },
    heading: {
        flex: 1,
        fontSize: 40,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 20
    },
    loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
      }
});