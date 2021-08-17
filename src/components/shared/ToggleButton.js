import React, {useState} from 'react';
import {View, Text} from 'react-native';
import * as Constants from '../../res/strings';
import styles from '../../res/styles/ToggleButton.style';

const ToggleButton = (props) => {
    const [backgroundOfCountry, setBackgroundOfCountry] = useState('white');
    const [backgroundOfWorld, setBackgroundOfWorld] = useState('#6d66ac');
    return (
        <View style = {styles.container}>
            <Text 
                style = {[styles.button, {backgroundColor: backgroundOfCountry}]}
                onPress = {() => {
                    setBackgroundOfCountry('white');
                    setBackgroundOfWorld('#6d66ac');
                    props.callback(Constants.COUNTRY_DATA);
                }}
                >
                    My Country
                </Text>
            <Text 
                style = {styles.button, [styles.button, {backgroundColor: backgroundOfWorld}]}
                onPress = {() => {
                    setBackgroundOfCountry('#6d66ac');
                    setBackgroundOfWorld('white');
                    props.callback(Constants.WORLD_DATA);
                }}>
                    World
                </Text>
        </View>
    );
}


export default ToggleButton;