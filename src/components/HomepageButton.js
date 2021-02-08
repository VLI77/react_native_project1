import React from 'react';
import { ceil, color } from 'react-native-reanimated';
import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";

const AppButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);


export default function HomepageButton({data}) {
    return (
      <View style={styles.screenContainer}>
      <View style={styles.container}>
        <AppButton title={data} size="sm" backgroundColor="#B00020" />
      </View>
      </View>
    );
  }

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        justifyContent: "center",
        width:'100%',
        height:'100%',
        
    },
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#FFFFFF",
        paddingVertical: 10,
        paddingHorizontal: 12,
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
        fontSize: 18,
        color: "#B00020",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase",
        
    },
    container: {
        flex:1,
        backgroundColor:'#F4F4F4',
        width:'100%',
        height:'100%',
        alignItems: 'center',
        justifyContent: 'center',
        
        
    }
})