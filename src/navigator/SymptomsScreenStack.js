import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Symptoms from '../components/Symptoms';
import Icon from 'react-native-vector-icons/Ionicons'

const SymptomsStack = createStackNavigator();

const SymptomsScreenStack = ({navigation}) => {
    return (
    <SymptomsStack.Navigator screenOptions={{
        headerTintColor: '#473f98',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}>
          <SymptomsStack.Screen name="Home" component = {Symptoms} options = {{
              title: 'Precautions',
              headerLeft: () => (
                  <Icon.Button name="ios-menu" size={25} color="#473f98" backgroundColor= 'white'
                  onPress = {() => navigation.openDrawer()}/>
              ),
          }}/>

    </SymptomsStack.Navigator>
    )

}

export default SymptomsScreenStack;