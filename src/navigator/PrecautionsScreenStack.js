import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Precautions from '../components/Precautions';
import Icon from 'react-native-vector-icons/Ionicons'

const PrecautionsStack = createStackNavigator();

const PrecautionsScreenStack = ({navigation}) => {
    return (
    <PrecautionsStack.Navigator screenOptions={{
        headerTintColor: '#473f98',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}>
          <PrecautionsStack.Screen name="Home" component = {Precautions} options = {{
              title: 'Precautions',
              headerLeft: () => (
                  <Icon.Button name="ios-menu" size={25} color="#473f98" backgroundColor= 'white'
                  onPress = {() => navigation.openDrawer()}/>
              ),
          }}/>

    </PrecautionsStack.Navigator>
    )

}

export default PrecautionsScreenStack;