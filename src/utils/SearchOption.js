import React, {Component} from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import AutoCompleteSearch from './AutoCompleteSearch';
class SearchOption extends Component {
    constructor(props) {
        super(props)
        this.state  ={
            searchBarView: false,
        }
    }
    render() {
        return (
            <View>
                {
                this.state.searchBarView? <AutoCompleteSearch/>:
                  <Icon.Button name="ios-search" size={25} color="#473f98" backgroundColor= 'white'
                   onPress = {() => {
                       this.setState({
                           searchBarView: true
                       })
                   }}/>
                }
                
            </View>
        );
    }
}

export default SearchOption;