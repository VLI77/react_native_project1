import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect} from 'react';
import { SafeAreaView,StyleSheet, Text, View,FlatList,Button } from 'react-native';
import {HomepageButton} from '../components/HomepageButton';
import {Logo} from '../components/Logo';
import {getType} from '../services/movie'
import { useNavigation } from '@react-navigation/native'



export default function HomeScreen() {
  const navigation = useNavigation();
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


// export default class HomeScreen extends React.Component{
//     state = {
//         filmsType: [],
//         isLoading: false,
//     }

//   constructor(props) {
//         super(props);

//     }

//      _renderResult = () => {
//             return <View>
//                 <FlatList
//                     data={this.state.filmsType}
//                     renderItem={({item, index}) => <HomepageButton film={item} 
//                     index={index} goToType={() => this.props.navigation.navigate('Genre', {title: item.name})} />}
//                     keyExtractor={item => item.id.toString()}
//                 />
//             </View>
//      }
//         _loadType = () => {
//         this.setState({isLoading: false})
//         getType()
//             .then(data => {
//               this.setState({filmsType: [...this.state.filmsType, ...data.genres], isLoading: false})
//               this._renderResult()
//               console.log('cc');
//             ;
//             })
//     }
    

 
//     render() {
//         return (
//             <SafeAreaView style={styles.main_container} >
//               {this._renderResult()}      
//              </SafeAreaView>
//         )
//     }

// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
  },
});
