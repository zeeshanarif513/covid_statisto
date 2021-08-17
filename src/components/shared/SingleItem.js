import React from 'react';
import { TouchableOpacity, View, Text} from 'react-native';
import styles from '../../res/styles/SingleItem.style'


const SingleItem = (props) => {
    function handlePress() {
        if(props.type === "continent")
            props.navigation.navigate('Continent', props.data.find(c => c.continent === props.name));
        else
            props.navigation.navigate('Country', {name: props.name});
    }
    return (
        <TouchableOpacity onPress = {handlePress}>
            <View style = {styles.container}>
                <Text style = {styles.name}>{props.name}</Text>
            </View>
        </TouchableOpacity>
    );
}


export default SingleItem;