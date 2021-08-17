import React, {useState} from 'react';
import {View, Text} from 'react-native';
import * as Constants from '../../res/strings';
import styles from '../../res/styles/TabsView.style';

const TabsView = (props) => {
    const [colorTotal, setColorTotal] = useState(props.category === Constants.TOTAL_DETAIL? 'white': '#817bb8');
    const [colorToday, setColorToday] = useState(props.category === Constants.TODAY_DETAIL? 'white': '#817bb8');
    return (
        <View style = {styles.container}>
            <Text 
                style = {[styles.tab, {color: colorTotal}]}
                onPress = {() => {
                    setColorTotal('white');
                    setColorToday('#817bb8');
                    props.callback(Constants.TOTAL_DETAIL);
                }}
                >
                    Total
            </Text>
            <Text 
                style = {styles.button, [styles.tab, {color: colorToday}]}
                onPress = {() => {
                    setColorTotal('#817bb8');
                    setColorToday('white');
                    props.callback(Constants.TODAY_DETAIL);
                }}>
                    Today
            </Text>
        </View>
    );
}


export default TabsView;