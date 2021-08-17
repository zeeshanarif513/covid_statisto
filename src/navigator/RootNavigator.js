import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import SideNav from "./SideNav";
import StackNavigator from "./StackNavigator";


//const AllAppNavigation = createStackNavigator();

const RootNavogator = () => {
    return (
        <NavigationContainer>
            {/* <AllAppNavigation.Navigator
                initialRouteName="Home"
                screenOptions={{
                    header: () => null
                }}
            >
                <AllAppNavigation.Screen name="stack" children = {StackNavigator} />
                <AllAppNavigation.Screen name="drawer" children = {SideNav} />
                
            </AllAppNavigation.Navigator> */}
            <StackNavigator />
            <SideNav />
        </NavigationContainer>
    );
}

export default RootNavogator;