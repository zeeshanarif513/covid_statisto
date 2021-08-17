import React, { useState, useEffect } from 'react';
import { Text, View, ActivityIndicator, Alert } from 'react-native';
import { connect } from 'react-redux';
import TabsView from './shared/TabsView';
import CovidStats from './shared/CovidStats';
import { fetchCountryStats, fetchCountryCovidHistory } from '../redux/actions/ServiceActions'
import * as Constants from '../res/strings'
import CovidChart from './shared/CovidChart';
import styles from '../res/styles/Country.style';

const Country = (props) => {
    const [category, setCategory] = useState(Constants.TOTAL_DETAIL);
    function handleTabs(selection) {
        setCategory(selection);
    }

    useEffect(() => {
        props.fetchCountryStats(props.route.params.name);
        props.fetchCountryCovidHistory(props.route.params.name);
        
    },[]);
   

    useEffect(() => {
        if(!props.countryIsLoading){
            if(props.countryError != undefined){
                Alert.alert(
                    'Error while fetching',
                    [
                        {
                            text: 'Do you want to reload', onPress: () => {
                                props.fetchCountryStats(props.route.params.name);
                            }
                        }
                    ],
                    { cancelable: false }
                );
            }
        }
        
        
    },[]);
    return(
        <View style = {styles.container}>
            <Text style = {styles.heading}>{props.route.params.name}</Text>  
            <TabsView  callback = {handleTabs} category = {category}/> 
            <CovidStats 
                data = { (props.CountryIsLoading) ? {} :
                    props.countryData }
                    category = {category}/>
            {
                (props.countryHistoryIsLoading)? 
                <View  style = {{backgroundColor: 'white', flex: 2, alignItems: 'center', justifyContent: 'center', borderRadius: 20, marginTop: 20}}>
                    <Text>Graph here</Text>
                </View>: 
                <CovidChart data = {props.countryHistoryData.timeline}/>
            }
            {(props.CountryIsLoading || props.countryHistoryIsLoading) &&
                <View style = {styles.loading}>
                    <ActivityIndicator size="large" color="#473f98"/>
                </View>
            }
        </View>
    );
}


const mapStateToProps = (state) => ({
    countryIsLoading: state.CountryReducer.countryIsLoading,
    countryError: state.CountryReducer.countryError,
    countryData: state.CountryReducer.countryData,
    countryHistoryIsLoading: state.CountryHistoryReducer.countryHistoryIsLoading,
    countryHistoryError: state.CountryHistoryReducer.countryHistoryError,
    countryHistoryData: state.CountryHistoryReducer.countryHistoryData,
});

const mapDispatchToProps = (dispatch) => ({
    fetchCountryStats: (country) => dispatch(fetchCountryStats(country)),
    fetchCountryCovidHistory: (country) => dispatch(fetchCountryCovidHistory(country)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Country);