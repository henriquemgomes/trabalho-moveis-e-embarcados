import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, Modal, TextInput  } from 'react-native';
import CustomButton from './CustomButton'
import { NavigationContainer } from '@react-navigation/native';


function Status({ navigation }){
  
  const [pressed, setPressed] = useState(false);
  let [minute, setMinute] = useState(0);

  return(
    <View style={styles.container}>
      <Text style={styles.mainText}>Status do dispositivo</Text>
      <View style={styles.card}>
        <Text style={styles.cardText}>Bateria: {Math.floor(Math.random() * 100) + 1 + '%'}</Text>
        <Text style={styles.cardText}>Sensor: <Text style={{color:'green'}}>OK</Text></Text>
      </View>
        <CustomButton
            style={styles.CustomButtonContainer}
            title="Voltar"
            onPress= {() => navigation.navigate("Home")}
            >
        </CustomButton>
        <StatusBar style="auto" />
    </View>
  );
}




const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
      alignItems: 'center',
    },
    mainText:{
      textShadowColor:'#000000',
      textShadowOffset:{width: 1.5, height: 1.5},
      textShadowRadius:2,
      marginTop:65,
      fontWeight: 'bold',
      fontSize: 50,
      justifyContent: 'center',
      textAlign:'center',
      color:'#fe8821'
    },
    cardText:{
      textShadowColor:'#000000',
      fontWeight: 'bold',
      fontSize: 25,
      textAlign:'left',
      color:'#000000'
    },
    CustomButtonContainer: {
      marginTop:32,
      elevation: 8,
      backgroundColor: "#fe8821",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12,
      width:300,
    },
    card: {
      padding: 24,
      borderRadius: 8,
      backgroundColor: '#FFF',
      marginBottom: 16,
      justifyContent: 'space-between',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      width: "60%",
      shadowOpacity: 0.2,
      shadowRadius: 1.41,
  
      elevation: 2,
    },
    PlusMinusButton: {
        flex: 1,
        marginTop:32,
        elevation: 8,
        backgroundColor: "#2cbbc3",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        width:30,
    },
});

  
export default Status