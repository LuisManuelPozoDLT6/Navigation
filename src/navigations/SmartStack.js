import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Index from '../screens/Index';
import Smart from '../screens/Smart';

const Stack = createStackNavigator();

export default function SmartStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
            name='smart'
            component={Smart}
            options={{ title: "Smart" }}
            />
        </Stack.Navigator>
    )
}