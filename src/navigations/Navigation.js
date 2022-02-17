
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Icon} from 'react-native-elements'
// import Index from '../screens/Index';
import Profile from '../screens/Profile'
import Smart from '../screens/Smart'
import SmartGo from '../screens/SmartGo'
import IndexStack from './IndexStack';
import SmartStack from './SmartStack';
import SmartGoStack from './SmartGoStack';
import ProfileStack from './ProfileStack';

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName='index'
                tabBarOptions={{
                    inactiveTintColor: "green",
                    activeTintColor: "red"
                }}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color }) => screenOption(route, color)
                })}
            >
                <Tab.Screen
                    options={{ title: "Inicio" }}
                    name='index'
                    component={IndexStack} />
                <Tab.Screen
                    options={{ title: "Smart" }}
                    name='smart'
                    component={SmartStack} />
                <Tab.Screen
                    options={{ title: "SmartGo" }}
                    name='smart-go'
                    component={SmartGoStack} />
                <Tab.Screen
                    options={{ title: "Perfil" }}
                    name='profile'
                    component={ProfileStack} />
            </Tab.Navigator>
        </NavigationContainer>
    )

    function screenOption(route, color) {
        let icono;

        switch (route.name) {
            case "index":
                icono = "view-grid-outline"
                break;
            case "smart":
                icono = "weight-lifter"
                break;
            case "smart-go":
                icono = "google"
                break;
            case "profile":
                icono = "account-outline"
                break;
            default:
                break;
        }
        return (
            <Icon 
            type='material-community'
            name={icono}
            size={22}
            color={color}/>
        )
    }
}   