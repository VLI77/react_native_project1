import React from 'react';
import {Text, View, Image, StyleSheet, ScrollView, Button, Linking, Animated, KeyboardAvoidingView} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {SearchAndDetailNavigator} from "./SearchAndDetailNavigator.js";
import {createStackNavigator} from '@react-navigation/stack'
import HomeScreen from "../screens/HomeScreen";
import {TypeScreen} from"../screens/TypeScreen"
// import Ionicons from 'react-native-vector-icons/Ionicons';
import {FontAwesome} from '@expo/vector-icons';

const TabNavigator = createBottomTabNavigator();
const Stack = createStackNavigator()

export const MainBottomNavigator = () => {
    return (
 
       <TabNavigator.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'HomeScreen') {
              iconName = focused
                ? 'home'
                : 'home';
            } else if (route.name === 'Search') {
              iconName = focused ? 'search' : 'search';
            }

            // You can return any component that you like here!
            return <FontAwesome name={iconName} size={size} color={color} />;
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


