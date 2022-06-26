import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useState, useEffect } from "react"

export default function Login() {

  return (
    <View style={styles.container}>
      <Text>Login component</Text>
      <TextInput
      placeholder='user id'
      />
       <TextInput
      placeholder='password'
      />
      <Button
         //onPress={onPressLearnMore}
         title="Login"
         //color="#841584"
         
/>
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
