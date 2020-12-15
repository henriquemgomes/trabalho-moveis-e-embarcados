import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import CustomButton from './CustomButton'
import helmet from '../assets/helmet.png';


function Home({ navigation }){
  
  const [pressed, setPressed] = useState(false);
  const [connected, setConnected] = useState({display: "none"});


  return(
    <View style={styles.container}>
      <Text style={styles.mainText}>Capacete Luminoso</Text>
      <Image style={styles.logo_container} source={helmet}/>
      <CustomButton
        style={[{ backgroundColor: pressed ?  '#EC5C69': '#238823' }, styles.CustomButtonContainerOn]}
        onPress = {() => {
          setPressed(!pressed)
          if(connected.display){
            setConnected(styles.CustomButtonContainer);
          }else{
            setConnected({display: "none"});
          }
        }}
        title= {pressed ? 'DESCONECTAR':'CONECTAR'}>
      </CustomButton>
      <CustomButton
        style={connected}
        title="DADOS DO DISPOSITIVO"
        onPress= {() => navigation.navigate('Status')}
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
      fontSize:60,
    },
    logo_container: {
      minHeight: 150,
      maxHeight: 150,
      minWidth: 150,
      maxWidth: 150,
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
    CustomButtonContainer: {
      marginTop:32,
      elevation: 8,
      backgroundColor: "#fe8821",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12,
      width:300,
    },
    CustomButtonContainerOn: {
      marginTop:32,
      elevation: 8,
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12,
      width:300,
    },
});

  
export default Home