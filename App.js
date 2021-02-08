import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {LaunchNavigator} from "./src/navigations/LaunchNavigator";
import { MainBottomNavigator } from './src/navigations/mainBottomNavigator';

export default function App() {
  return (
      <NavigationContainer>
          <MainBottomNavigator  />
      </NavigationContainer>
  );
}
