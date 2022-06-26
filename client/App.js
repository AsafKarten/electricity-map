import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from "react"

import Login from './components/Login';

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

  return (
    <View style={styles.container}>
      <Text>Electricity-map App</Text>
      <Login/>
      <StatusBar style="auto" />
    </View>
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
