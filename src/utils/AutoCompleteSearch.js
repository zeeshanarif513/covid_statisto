
import React, {Component} from 'react';
import { FlatList, View, StyleSheet, TextInput } from 'react-native';
import {ItemSeparator} from './ItemSeperator'
import SingleItem from '../components/shared/SingleItem';


class AutoCompleteSearch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            search: ''
        }
        this.countries = ['India', 'Pakistan', 'Bangladesh']
        this.searchFilterFunction = this.searchFilterFunction.bind(this);
    }

  
    searchFilterFunction(text){
        if (text) {
          const newData = this.countries.filter(
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
              data: this.countries,
              search: text
          })
        }
      };
      render() {
          return (
            <View style = {styles.container}>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-evenly",
        padding: 10,
        backgroundColor: '#473f98',
    },
    loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
      },
      textInputStyle: {
        height: 40,
        borderWidth: 1,
        paddingLeft: 20,
        margin: 5,
        borderColor: '#009688',
        backgroundColor: '#FFFFFF',
      },
  });


  export default AutoCompleteSearch;