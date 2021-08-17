import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AllCountries from '../components/AllCountries';
import Icon from 'react-native-vector-icons/Ionicons'

const AllCountriesStack = createStackNavigator();

const AllCountriesListStack = ({navigation}) => {
    return (
    <AllCountriesStack.Navigator screenOptions={{
        headerTintColor: '#473f98',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}>
          <AllCountriesStack.Screen name="Home" component = {AllCountries} options = {{
              title: 'Countries',
              headerLeft: () => (
                  <Icon.Button name="ios-menu" size={25} color="#473f98" backgroundColor= 'white'
                  onPress = {() => navigation.openDrawer()}/>
              ),
          }}/>

    </AllCountriesStack.Navigator>
    )

}

export default AllCountriesListStack;