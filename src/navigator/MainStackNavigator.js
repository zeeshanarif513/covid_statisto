
import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Continent from '../components/Continent';
import Country from '../components/Country';
import DrawerNavigator from './DrawerNavigator';
import HomeScreenStack from './HomeScreenStack';


const Stack = createStackNavigator();

const MainStackNavigator =  ({navigation}) =>  {
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerTintColor: '#473f98',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}>
        <Stack.Screen
          name='Home'
          component={DrawerNavigator}
          options = {{
            headerShown: false
          }}
          
        />
        <Stack.Screen
          name='HomeScreen'
          component={HomeScreenStack}
        />
        <Stack.Screen
          name='Continent'
          component={Continent}
        />
        <Stack.Screen
          name='Country'
          component={Country}
        />
      </Stack.Navigator>
      </NavigationContainer>
  );
};

export default MainStackNavigator;