import React from 'react';
import { View, Text, Dimensions, Image } from 'react-native';
import {
    DrawerItem,
    DrawerContentScrollView,
  } from '@react-navigation/drawer';
import styles from '../res/styles/DrawerContent.style';

const DrawerContent = (props) => {
    return (
        <DrawerContentScrollView {...props}>
            <View style = {styles.drawerContent}>
                <View style = {styles.drawerHeader}>
                    <Image 
                        source={{uri: "https://img.icons8.com/ios/50/ffffff/coronavirus--v1.png"}}
                        style = {{
                                    height: Dimensions.get("window").height * 0.12, 
                                    width: Dimensions.get("window").height * 0.12, 
                                    margin: 5
                        }}
                    />
                    <Text style = {styles.heading}>Covid Statisto</Text>
                </View>
                <View style = {styles.content}>
                    <DrawerItem 
                        label = "Home"
                        labelStyle = {styles.labelStyle}
                        onPress = {() => {
                            props.navigation.navigate('Home');
                        }}
                        
                    />
                    <DrawerItem 
                        label = "Continents"
                        labelStyle = {styles.labelStyle}
                        onPress = {() => {
                            props.navigation.navigate('Continents');
                        }}
                    />
                    <DrawerItem 
                        label = "Countries"
                        labelStyle = {styles.labelStyle}
                        onPress = {() => {
                            props.navigation.navigate('Countries');
                        }}
                    />
                    <DrawerItem 
                        label = "Precautions"
                        labelStyle = {styles.labelStyle}
                        onPress = {() => {
                            props.navigation.navigate('Precautions');
                        }}
                        
                    />
                    <DrawerItem 
                        label = "Symptoms"
                        labelStyle = {styles.labelStyle}
                        onPress = {() => {
                            props.navigation.navigate('Symptoms');
                        }}
                    />
                </View>
            </View>
            
        </DrawerContentScrollView>
    );
}


export default DrawerContent;