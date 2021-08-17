import React, {Component} from 'react';
import { FlatList, View, StyleSheet, Text, TextInput } from 'react-native';
import {ItemSeparator} from './shared/ItemSeperator';
import SingleItem from './shared/SingleItem';
import styles from '../res/styles/CountriesList.style'

class CountriesList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: this.props.countries,
            search: ''
        }
        this.searchFilterFunction = this.searchFilterFunction.bind(this);
    }

  
    searchFilterFunction(text){
        if (text) {
          const newData = this.props.countries.filter(
            function (item) {
              const itemData = item
                ? item.toUpperCase()
                : ''.toUpperCase();
              const textData = text.toUpperCase();
              return itemData.indexOf(textData) > -1;
          });
          this.setState({
              data: newData,
              search: text
          })
        } else {
          this.setState({
              data: this.props.countries,
              search: text
          })
        }
      };
      

    render() {
        return(
            <View style = {styles.container}>
                <Text style = {styles.heading}>Countries</Text>
                <TextInput
                    style={styles.textInputStyle}
                    onChangeText={(text) => this.searchFilterFunction(text)}
                    value={this.state.search}
                    underlineColorAndroid="transparent"
                    placeholder="Search Here"
                    />
                <FlatList
                    data={this.state.data}
                    renderItem={({item}) => (
                        <SingleItem 
                            name = {item}
                            navigation={this.props.navigation}
                            type = "country"
                        />
                    )}
                    keyExtractor = {item => item}
                    ItemSeparatorComponent={ItemSeparator}
                    >
                </FlatList>
            </View>
        );
    }
}



export default CountriesList;