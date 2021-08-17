import React from 'react';
import { Text, View } from 'react-native';
import StatBox from './shared/StatBox';
import CountriesList from './CountriesList';
import { ScrollView } from 'react-native-gesture-handler';
import styles from '../res/styles/Continent.style'

const Continent = (props) => {
    return (
        <View style = {styles.container}>
            <ScrollView>
                <Text style = {styles.heading}>{props.route.params.continent}</Text>
                <View style = {styles.statsContainer}>
                    <StatBox color = "#4cd97a" title = "Cases" value = {props.route.params.cases} />
                    <StatBox color = "#4db5ff" title = "Deaths" value = {props.route.params.deaths} />
                    <StatBox color = "#9059ff" title = "Recovered" value = {props.route.params.recovered} />
                </View>  
                <Text style = {styles.subHeading}>Countries</Text>
            </ScrollView>
            <View style = {styles.list}>
                <CountriesList countries = {props.route.params.countries} navigation = {props.navigation}/>
            </View>
        </View>
    )
}



export default Continent;