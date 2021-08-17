import React from 'react';
import { View, Image, Text} from 'react-native';
import styles from '../../res/styles/PrecautionsCard.style';

const PrecautionCard = (props) => {
    return (
        <View style= {styles.covidSymptom}>
                <Image 
                    source={{uri: props.data.image}}
                    style = {{/*flex: 1, alignSelf : 'stretch', */height: 60, width: 60, margin: 5}}
                />
                <View style = {styles.contentContainer}>
                    <Text style= {styles.heading}>{props.data.title}</Text>
                    <Text style = {styles.contentContainer}>{props.data.content}</Text>
                </View>

        </View>
    );

}


export default PrecautionCard;