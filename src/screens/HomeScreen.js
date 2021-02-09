import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect} from 'react';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import {HomepageButton} from '../components/HomepageButton';
import {Logo} from '../components/Logo';
import{getType} from '../services/movie'
import { useNavigation } from '@react-navigation/native'


export default function HomeScreen({navigation}) {

  const [isLoading, setIsLoading] = useState(false)
  const [filmsType, setFilmsType] = useState([])

  useEffect(() => {
      setIsLoading(true);
      getType().then(data => {
          setIsLoading(false);
          setFilmsType(data.genres);
      })
  }, [])


  return (
    <View style={styles.container}>
      <Logo/>
      <FlatList
        data={filmsType}
        renderItem={({item, index}) => <HomepageButton film={item} index={index} goToType={() => navigation.navigate('Genre', {title: item.name})} />}
        keyExtractor={item => item.name.toString()}
        numColumns={2}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
  },
});
