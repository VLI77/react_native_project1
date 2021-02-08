import React from 'react'
import {View, StyleSheet, Image} from "react-native";

export const Logo = (props) => {
  return (
      <View alignItems="center">
          <View style={styles.logo_container}>
              <Image style={styles.logo} source={require('../../assets/images/logo.jpg')} />
          </View>
      </View>
  )
}

const styles = StyleSheet.create({
  logo_container: {
      width: 120,
      height: 120,
      marginTop:'10%',
      marginBottom:'5%',
      borderRadius: 360,
      borderWidth: 8,
      borderColor: "#B00020",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden"
  },
  logo: {
      width: 110,
      height: 110,
  },
})