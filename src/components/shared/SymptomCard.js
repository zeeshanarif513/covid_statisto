import React from 'react';
import { View, Image, Text} from 'react-native';
import styles from '../../res/styles/SymptomCard.style'

const SymptomCard = (props) => {
    return (
        <View style= {styles.covidSymptom}>
                <Image 
                    source={{uri: props.data.image}}
                    style = {{/*flex: 1, alignSelf : 'stretch', */height: 100, width: 100}}
                />
                <View style = {styles.contentContainer}>
                    <Text style= {styles.heading}>{props.data.title}</Text>
                    <Text style = {styles.contentContainer}>{props.data.content}</Text>
                </View>

        </View>
    );

}


export default SymptomCard;