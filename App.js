import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Components/Home'
import Status from './Components/Status'


const Stack = createStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="Status" component={Status} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    fontSize:60,
  },
  mainText:{
    textShadowColor:'#000000',
    textShadowOffset:{width: 0.5, height: 0.5},
    textShadowRadius:2,
    marginTop:64,
    fontWeight: 'bold',
    fontSize: 45,
    justifyContent: 'center',
    textAlign:'center',
    color:'#fff'
  },
  CustomButtonContainer: {
    marginTop:32,
    elevation: 8,
    backgroundColor: "#2cbbc3",
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
