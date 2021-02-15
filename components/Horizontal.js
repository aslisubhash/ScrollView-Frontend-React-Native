import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, Dimensions } from 'react-native'

 const Horizontal = () =>{
        return (
            <ScrollView horizontal={true} pagingEnabled={true} style={styles.container}>
                <View style={styles.outerthree}>
                    <Text style={styles.innerText}>
                        Hello From Horizontal
                    </Text>
                </View>
                <View style={[styles.outerone, {backgroundColor:"#B9345A"}]}>
                    <Text style={styles.innerText}>
                        Hello From Screen Two
                    </Text>
                </View>
                <View style={[styles.outertwo, styles.red]}>
                    <Text style={styles.innerText}>
                        Hello From Screen Three
                    </Text>
                </View>
            </ScrollView>
        )
}
export default Horizontal;

const styles = StyleSheet.create({
    container:{
     
    },
    outerthree:{
        backgroundColor:"#007bb6",
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height
    },
    outertwo:{
        backgroundColor:"#000",
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height
    },
    outerone:{
        backgroundColor:"#DE4839",
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height
    },
    red:{
        backgroundColor:"#DE4839",
    },
    innerText:{
        color: "#fff",
        fontSize: 23,
        fontWeight: "bold"
    },
    
})
