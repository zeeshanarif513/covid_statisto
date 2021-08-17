import React from 'react';
import { View } from 'react-native'
import PrecautionCard from './shared/PrecautionCard';
import styles from '../res/styles/Precautions.style'

const Precautions = () => {
    const precautions = [
        {
            image: "https://img.icons8.com/pastel-glyph/64/4a90e2/wash-your-hands--v2.png",
            title: "Wash your hands frequently",
            content: "Wash your hands often with soap and water for atleast 20 seconds."
        },
        {
            image: "https://img.icons8.com/dotty/80/4a90e2/facepalm.png",
            title: "Cover coughs",
            content: "While coughing or sneezing cover your nose and mouth."
        },
        {
            image: "https://img.icons8.com/pastel-glyph/64/4a90e2/avoid-crowd--v1.png",
            title: "Avoid crowded places",
            content: "Avoid large events and mass gatherings."
        },
        {
            image: "https://img.icons8.com/pastel-glyph/64/4a90e2/avoid-touching--v1.png",
            title: "Avoid touching",
            content: "Avoid touching your eyes, nose and mouth if your hands are not clean."
        },
        {
            image: "https://img.icons8.com/ios/80/4a90e2/protection-mask.png",
            title: "Use masks",
            content: "Cover your nose and mouth with disposable tissue or handkerchief."
        },
        {
            image: "https://img.icons8.com/pastel-glyph/64/4a90e2/social-distance--v2.png",
            title: "Avoid close contact",
            content: "Avoid close contact (about 6 feet) with anyone who is sick or has symptoms."
        },
    ]

    function precautionsList() {
        return precautions.map((data, key) => {
            return (
                <View style = {styles.subContainer}>
                    <PrecautionCard data = {data} key = {key}/>
                </View>
            );
        });
    }
    return (
        <View style = {styles.container}>
            {precautionsList()}
        </View>
    );
}


export default Precautions;