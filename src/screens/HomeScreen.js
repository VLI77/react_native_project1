import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomepageButton from '../components/HomepageButton';
import {Logo} from '../components/Logo';
import{getType} from '../services/movie'


export default function HomeScreen() {


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
                    renderItem={({item, index}) => <HomepageButton film={item} index={index} />}
                    keyExtractor={item => item.id.toString()}
            
                />
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
