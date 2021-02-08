import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {LaunchScreen} from "../screens/LaunchScreen";



const Stack = createStackNavigator();

export const LaunchNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Accueil" component={LaunchScreen} options={{headerShown: false}} />
            <Stack.Screen name="Recherche" component={MainBottomNavigator} />

        </Stack.Navigator>
    )
}
