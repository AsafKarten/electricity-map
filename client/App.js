import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from "react"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './components/Login';
import Mapbox from './components/Mapbox';
export default function App() {

  useEffect(() => {
    initiateSocketConnection()
    
  }, [])

  const initiateSocketConnection = () => {
    // Add URL to the server which will contain the server side setup
    const ws = new WebSocket(`ws://localhost:8080`)

    // When a connection is made to the server, send the user ID so we can track which
    // socket belongs to which user
    ws.onopen = () => {
      let start = new Date();
      for (let i = 0; i < 1000; i++) {
        let sendTime = new Date();
        let time = sendTime - start;
        
          ws.send(
            JSON.stringify({
              message_number: i,
              start_time: start,
              send_time: sendTime,
              time: time
            })
          )
        
        
      }
    }

    // Ran when teh app receives a message from the server
    ws.onmessage = (e) => {
      console.log(e.data);
    }

  }

const Stack = createNativeStackNavigator();

  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Mapbox" component={Mapbox} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
