import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useState, useEffect } from "react"



export default function Login({navigation}) {

  const [userID, onChangeUserID] = useState('');
  const [password, onChangePassword] = useState('');    


  const onPressLogin = () =>{
    if(userID === '' || password ===''){
        console.log('please enter user id and password');
        return;
    }
    // let answer = LoginFunc();
     navigation.navigate('Mapbox');
            
}


  return (
    <View style={styles.container}>
      <Text>Login component</Text>
      <TextInput
      style={styles.input}
      onChangeText={onChangeUserID}
      value={userID}
      placeholder='user id'
      />
       <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
      placeholder='password'
      />
      <Button
         onPress={()=>onPressLogin}
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
