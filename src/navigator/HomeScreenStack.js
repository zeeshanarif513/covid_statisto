import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../components/HomeScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeStack = createStackNavigator();

const HomeScreenStack = ({navigation}) => {
    return (
    <HomeStack.Navigator screenOptions={{
        headerTintColor: '#473f98',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}>
          <HomeStack.Screen name="Home" component = {HomeScreen} options = {{
              title: 'Home',
              headerLeft: () => (
                  <Icon.Button name="ios-menu" size={25} color="#473f98" backgroundColor= 'white'
                  onPress = {() => navigation.openDrawer()}
                  />
              ),
          }}/>

    </HomeStack.Navigator>
    )

}

export default HomeScreenStack;