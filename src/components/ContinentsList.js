import React, {Component} from 'react';
import { connect } from 'react-redux';
import { FlatList, View, ActivityIndicator, Text } from 'react-native';
import {ItemSeparator} from './shared/ItemSeperator';
import SingleItem from './shared/SingleItem';
import { fetchContinentStats } from '../redux/actions/ServiceActions';
import styles from '../res/styles/ContinentsList.style'


class ContinentsList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            data: []
        }
            
    }
    componentDidMount() {
        this.props.fetchContinentStats();
        
    }


    static getDerivedStateFromProps(nextProps, prevState){
        if(!nextProps.continentIsLoading){
            return {
                isLoading: true,
                data: nextProps.continentData
            }
        }
        return null;
    }

    

    render() {
        const continents = ["Asia", "Europe", "South America", "North America", "Africa", "Australia-Oceania"]
        return(
            <View style = {styles.container}>
                
                <Text style = {styles.heading}>Continents</Text>
                {this.props.continentIsLoading? 
                    <View style = {styles.loading}>
                        <ActivityIndicator size="large" color="white"/>
                    </View>:
                    <FlatList
                    data={continents}
                    renderItem={({item}) => (
                        <SingleItem 
                            data = {this.state.data}
                            name = {item}
                            navigation={this.props.navigation}
                            type = "continent"
                        />
                    )}
                    keyExtractor = {item => item}
                    ItemSeparatorComponent={ItemSeparator}
                    >
                </FlatList>
                }
            </View>
        );
    }
}



const mapStateToProps = (state) => ({
    continentIsLoading: state.ContinentReducer.continentIsLoading,
    continentError: state.ContinentReducer.continentError,
    continentData: state.ContinentReducer.continentData,
});

const mapDispatchToProps = (dispatch) => ({
    fetchContinentStats: () => dispatch(fetchContinentStats()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContinentsList);