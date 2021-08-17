import React from 'react';
import { View } from 'react-native';
import StatBox from './StatBox';
import * as Constants from '../../res/strings';
import styles from '../../res/styles/CovidStats.style'

const CovidStats = (props) => {
    console.log("in covid stats");
    const data = {}
    if(props.category === Constants.TOTAL_DETAIL){
        data.cases = props.data.cases;
        data.deaths = props.data.deaths;
        data.recovered = props.data.recovered;
        data.active = props.data.active;
        data.critical = props.data.critical;
    }
    if(props.category === Constants.TODAY_DETAIL) {
        data.cases = props.data.todayCases;
        data.deaths = props.data.todayDeaths;
        data.recovered = props.data.todayRecovered;
        data.active = props.data.active;
        data.critical = props.data.critical;

    }
    return (
        <View style = {styles.statsContainer}>
            <View style = {styles.subContainer}>
                <StatBox color = "#ffb25a" title = "Affected" value = {data.cases} />
                <StatBox color = "#ff5958" title = "Deaths" value = {data.deaths} />
            </View>
            <View style = {styles.subContainer}>
                <StatBox color = "#4cd97a" title = "Recovered" value = {data.recovered} />
                <StatBox color = "#4db5ff" title = "Active" value = {data.active} />
                <StatBox color = "#9059ff" title = "Serious" value = {data.critical} />
            </View>
            

        </View>
    );
}

export default CovidStats;