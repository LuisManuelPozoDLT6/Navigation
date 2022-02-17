import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Index from '../screens/Index';
import Smart from '../screens/Smart';

const Stack = createStackNavigator();

export default function IndexStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
            name='Index'
            component={Index}
            options={{ title: "Inicio" }}
            />
        </Stack.Navigator>
    )
}