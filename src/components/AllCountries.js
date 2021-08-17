import React, { Component } from 'react';
import { connect } from 'react-redux';

import { View, ActivityIndicator} from 'react-native';
import { fetchAllCountriesStats } from '../redux/actions/ServiceActions';
import CountriesList from './CountriesList';
import styles from '../res/styles/AllCountries.style';

class AllCountries extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            
        }
        this.fetchCountries = this.fetchCountries.bind(this)
    }
    
    componentDidMount () {
        this.props.fetchAllCountriesStats()
    }

    fetchCountries() {
        var countriesNames = []
        this.props.countriesData.map(c => {
            countriesNames.push(c.country)
        });
        return countriesNames;
    }
   
    static getDerivedStateFromProps(nextProps, prevState){
        if(!nextProps.countriesAreLoading){
            return {
                isLoading: false,
            }
        }
        return null;
    }
    

 
    render () {
        console.log("render", this.props.countriesData);
        return(
       
            <View  style = {styles.container}>
                {
                    this.state.isLoading ? 
                        <View style = {styles.loading}>
                            <ActivityIndicator size="large" color="white"/>
                        </View> :
                        !this.props.countriesAreLoading && <CountriesList countries = {this.state.isLoading? []: this.fetchCountries()} navigation = {this.props.navigation}/> 
                        
                    
                }
            </View>
        );
    }

  

}




const mapStateToProps = (state) => ({
    countriesAreLoading: state.AllCountriesReducer.countriesAreLoading,
    countriesError: state.AllCountriesReducer.countriesError,
    countriesData: state.AllCountriesReducer.countriesData,
});

const mapDispatchToProps = (dispatch) => ({
    fetchAllCountriesStats: () => dispatch(fetchAllCountriesStats()),
});
export default connect(mapStateToProps, mapDispatchToProps)(AllCountries);