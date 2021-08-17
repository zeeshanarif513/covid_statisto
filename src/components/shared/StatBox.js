import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const StatBox = (props) => {
    return (
        <View style = {{flex: 1, backgroundColor: props.color, margin: 5, justifyContent: 'space-between', borderRadius: 20}}>
            <Text style = {{color: 'white', margin: 10, fontWeight: 'bold', fontSize: 15}}> {props.title} </Text>
            <Text style = {{color: 'white', margin: 10, fontWeight: 'bold', fontSize: 20}}> {props.value? props.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','): 0} </Text>
        </View>
    );
}



export default StatBox;