import React from 'react';
import { ceil, color } from 'react-native-reanimated';
import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";

const AppButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

export const HomepageButton = (props) => {
  const {film, index} = props;

  return(
    <View style={styles.screenContainer}>
    <View style={styles.container}>
      <AppButton title={film.name} size="sm" backgroundColor="#B00020" />
    </View>
    </View>

  )
}


const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        justifyContent: "center",
        width:'100%',
        height:'100%',
        
    },
    appButtonContainer: {
        flex:1,
        width:'90%',
        margin:10,
        elevation: 8,
        backgroundColor: "#FFFFFF",
        paddingVertical: 20,
        paddingHorizontal: 20,
        shadowColor:'#B00020',
        shadowOffset: {
	        width: 0,
	        height: 8,
        },
        shadowOpacity: 0.7,
        shadowRadius: 10.32,
        elevation: 16,
    },
    appButtonText: {
        fontSize: 15,
        color: "#B00020",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase",
        
    },
    container: {
        width:'100%',
        height:'100%',
        alignItems: 'center',
        justifyContent: 'center',
    }
})