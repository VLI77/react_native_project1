import React from 'react';
import { ceil, color } from 'react-native-reanimated';
import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";



export const HomepageButton = (props) => {
  const {film,goToType, index} = props;

  return(
    <TouchableOpacity onPress={goToType} style={styles.appButtonContainer}>
    <View style={styles.screenContainer}>
      <Text  style={styles.appButtonText} size="sm" backgroundColor="#B00020">{film.name}</Text>
    </View>
    </TouchableOpacity>

  )
}

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
    },
    appButtonContainer: {
        flex:1,
        margin: 10,
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
})