import React from 'react';
import {Text, View, Image, StyleSheet, ScrollView, Button, Linking, Animated} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {SearchAndDetailNavigator} from "./SearchAndDetailNavigator.js";
import HomeScreen from "../screens/HomeScreen";

const TabNavigator = createBottomTabNavigator();

export const MainBottomNavigator = () => {
    return (
        <TabNavigator.Navigator     tabBarOptions={{
            activeTintColor: '#B5A90F',
            inactiveTintColor: 'lightgray',
            activeBackgroundColor: '#B00020',
            inactiveBackgroundColor: '#B00020',
                style: {
                      backgroundColor: '#B5A90F',
                      paddingBottom: 3
                }
         }} >
            <TabNavigator.Screen style={styles.navigator} name="HomeScreen" component={HomeScreen} />
            <TabNavigator.Screen name="Search" component={SearchAndDetailNavigator} />
        </TabNavigator.Navigator>
    )
}

const styles = StyleSheet.create({
    navigator: {

        backgroundColor: "red",
    },
  
})
