import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Horizontal from './components/Horizontal'

 const App = () =>{
        return (
            <View style={styles.container}>
                <Horizontal/>
            </View>
        )
}
export default App;

const styles = StyleSheet.create({
  container:{
      flex: 1,
      backgroundColor: "#fff",
      alignItems:"center",
      justifyContent:"center"
  }
})
