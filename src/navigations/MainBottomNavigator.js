import React from 'react';
import {Text, View, Image, StyleSheet, ScrollView, Button, Linking, Animated} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {SearchAndDetailNavigator} from "./SearchAndDetailNavigator.js";
import HomeScreen from "../screens/HomeScreen";
import { FontAwesome } from '@expo/vector-icons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TabNavigator = createBottomTabNavigator();

export const MainBottomNavigator = () => {
    return (
        
        <TabNavigator.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'HomeScreen') {
              iconName = focused
                ? 'ios-home'
                : 'ios-home-outline';
            } else if (route.name === 'Search') {
              iconName = focused ? 'ios-search' : 'ios-search-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#B5A90F',
          inactiveTintColor: 'white',
          activeBackgroundColor:'#B00020',
          inactiveBackgroundColor: '#B00020',

        }}
      >
            <TabNavigator.Screen name="HomeScreen" component={HomeScreen} />

            <TabNavigator.Screen name="Search" component={SearchAndDetailNavigator} />
        </TabNavigator.Navigator>
    )
}


