import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ContinentsList from '../components/ContinentsList';
import Icon from 'react-native-vector-icons/Ionicons'

const ContinentsStack = createStackNavigator();

const ContinentsListStack = ({navigation}) => {
    return (
    <ContinentsStack.Navigator screenOptions={{
        headerTintColor: '#473f98',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}>
          <ContinentsStack.Screen name="Home" component = {ContinentsList} options = {{
              title: 'Continents',
              headerLeft: () => (
                  <Icon.Button name="ios-menu" size={25} color="#473f98" backgroundColor= 'white'
                  onPress = {() => navigation.openDrawer()}/>
              ),
          }}/>

    </ContinentsStack.Navigator>
    )

}

export default ContinentsListStack;