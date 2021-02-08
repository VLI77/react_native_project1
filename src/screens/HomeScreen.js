import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomepageButton from '../components/HomepageButton';
import {Logo} from '../components/Logo';


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Logo/>
      <HomepageButton data="Action"/>
      <HomepageButton data="Aventure"/>
      <HomepageButton data="Horreur"/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
