import React, {useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Text, View, ActivityIndicator, Alert } from 'react-native';
import * as RNLocalize from 'react-native-localize';
import ToggleButton from './shared/ToggleButton';
import TabsView from './shared/TabsView';
import CovidStats from './shared/CovidStats';
import { fetchCountryStats, fetchWorldStats, fetchCountryCovidHistory, fetchWorldCovidHistory } from '../redux/actions/ServiceActions';
import CovidChart from './shared/CovidChart';
import * as Constants from '../res/strings';
import styles from '../res/styles/HomeScreen.style';


const HomeScreen = (props) => {
    const [userSelection, setUserSelection] = useState(Constants.COUNTRY_DATA);
    const [category, setCategory] = useState(Constants.TOTAL_DETAIL);
    function handleToggle(selection){
        setUserSelection(selection);
        
    }
    

    function handleTabs(selection) {
        setCategory(selection);
    }
   
    useEffect(() => {
        props.fetchCountryStats(RNLocalize.getCountry());
        props.fetchWorldStats();
        props.fetchCountryCovidHistory(RNLocalize.getCountry());
        props.fetchWorldCovidHistory();
        
    },[]);
   

    useEffect(() => {
        if(!props.countryIsLoading && !props.worldIsLoading){
            if(props.countryError != undefined || props.worldError != undefined){
                Alert.alert(
                    'Error while fetching',
                    [
                        {
                            text: 'Do you want to reload', onPress: () => {
                                props.fetchCountryStats(RNLocalize.getCountry());
                                props.fetchWorldStats();
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
            <Text style = {styles.heading}>Statistics</Text>
            <ToggleButton callback = {handleToggle}/>   
            <TabsView callback = {handleTabs} category = {category}/> 
            <CovidStats 
                data = { (props.CountryIsLoading || props.worldIsLoading) ? {} :
                    userSelection ===  Constants.COUNTRY_DATA? props.countryData: props.worldData} category = {category}/>
            {
                (props.countryHistoryIsLoading || props.worldHistoryIsLoading)? 
                <View  style = {{backgroundColor: 'white', flex: 2, alignItems: 'center', justifyContent: 'center', borderRadius: 20, marginTop: 20}}>
                    <Text>Graph here</Text>
                </View>: 
                <CovidChart data = {userSelection ===  Constants.COUNTRY_DATA? props.countryHistoryData.timeline: props.worldHistoryData}/>
            }
            {(props.CountryIsLoading || props.worldIsLoading) &&
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
    worldIsLoading: state.WorldReducer.worldIsLoading,
    worldError: state.WorldReducer.worldError,
    worldData: state.WorldReducer.worldData,
    countryHistoryIsLoading: state.CountryHistoryReducer.countryHistoryIsLoading,
    countryHistoryError: state.CountryHistoryReducer.countryHistoryError,
    countryHistoryData: state.CountryHistoryReducer.countryHistoryData,
    worldHistoryIsLoading: state.WorldHistoryReducer.worldHistoryIsLoading,
    worldHistoryError: state.WorldHistoryReducer.worldHistoryError,
    worldHistoryData: state.WorldHistoryReducer.worldHistoryData,
});

const mapDispatchToProps = (dispatch) => ({
    fetchCountryStats: (country) => dispatch(fetchCountryStats(country)),
    fetchWorldStats: () => dispatch(fetchWorldStats()),
    fetchCountryCovidHistory: (country) => dispatch(fetchCountryCovidHistory(country)),
    fetchWorldCovidHistory: () => dispatch(fetchWorldCovidHistory())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);