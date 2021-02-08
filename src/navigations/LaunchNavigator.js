import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";



const Stack = createStackNavigator();

export const LaunchNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Recherche" component={MainBottomNavigator} />
        </Stack.Navigator>
    )
}
