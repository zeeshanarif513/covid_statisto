import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerContent from "../utils/DrawerContent";
import HomeScreenStack from "./HomeScreenStack";
import ContinentsListStack from "./ContinentsListStack";
import PrecautionsScreenStack from "./PrecautionsScreenStack";
import SymptomsScreenStack from "./SymptomsScreenStack";
import AllCountriesListStack from "./AllCountriesStack";

const Drawer = createDrawerNavigator();



const DrawerNavigator = ({navigation}) =>  {
    console.log(navigation);
    return (
        
            <Drawer.Navigator  drawerContent = {(props) => <DrawerContent {...props}/>}>
                <Drawer.Screen name="Home" component={HomeScreenStack} navigation = {navigation}/>
                <Drawer.Screen name="Continents" component={ContinentsListStack} />
                <Drawer.Screen name="Countries" component={AllCountriesListStack} />
                <Drawer.Screen name="Precautions" component={PrecautionsScreenStack} />
                <Drawer.Screen name="Symptoms" component={SymptomsScreenStack} />
            </Drawer.Navigator>
       
    );
}

export default DrawerNavigator;
