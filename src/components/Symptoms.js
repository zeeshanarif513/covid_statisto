import React from 'react';
import { View } from 'react-native'
import SymptomCard from './shared/SymptomCard';
import styles from '../res/styles/Symptoms.style'

const Symptoms = () => {
    const symptoms = [
        {
            image: "https://img.icons8.com/pastel-glyph/50/4a90e2/coughing.png",
            title: "Dry Cough",
            content: "A dry caugh is a caugh that doesn't bring up mucus."
        },
        {
            image: "https://img.icons8.com/wired/64/4a90e2/fever.png",
            title: "Fever",
            content: "A temperature that's higher than normal, typically around 98.6°F (37°C)"
        },
        {
            image: "https://img.icons8.com/ios/50/4a90e2/runny-nose.png",
            title: "Runny Nose",
            content: "Mucus draining or dripping from the nostril."
        },
        {
            image: "https://img.icons8.com/pastel-glyph/64/4a90e2/throat--v1.png",
            title: "Sore Throat",
            content: "A sore throat is a painful, dry, or scratchy feeling in the throat."
        },
        {
            image: "https://img.icons8.com/ios/50/4a90e2/slouch.png",
            title: "Fatigue",
            content: "You have no motivation, no energy and overall feeling of tiredness."
        },
    ]
    return (
        <View style = {styles.container}>
            <View style = {styles.subContainer}>
                <SymptomCard data = {symptoms[0]}/>
            </View>
            <View style = {styles.subContainer}>
                <SymptomCard data = {symptoms[1]} />
                <SymptomCard data = {symptoms[2]} />
            </View>
            <View style = {styles.subContainer}>
                <SymptomCard data = {symptoms[3]} />
                <SymptomCard data = {symptoms[4]} />
            </View>
        </View>
    );
}



export default Symptoms;