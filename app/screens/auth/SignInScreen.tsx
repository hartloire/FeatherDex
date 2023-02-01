import { StyleService, useStyleSheet, Layout, Text, Input, Button } from '@ui-kitten/components';
import { TouchableOpacity, StyleSheet, TextInput, KeyboardAvoidingView, View } from 'react-native';
import React, { useState } from 'react'
import { auth }from '../../firebaseConfig';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@firebase/auth';
import SvgComponent from "../../assets/birdSvgComponent";

const SignInScreen = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const handleSignUp = ( ) => {

    createUserWithEmailAndPassword(auth, email, password)
    .then(userCredentials => {
      const user = userCredentials.user;
      console.log('Registered with ',user.email)
    })
    .catch(error => alert(error.message))
  }

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email,password)
    .then(userCredentials => {
      const user = userCredentials.user;
      console.log('Logged in with ', user.email)
    })
    .catch(error => alert(error.message))
  }
  return (
    <React.Fragment>

      <Layout style = {styles.container}>
      <Layout style = {styles.birdContainer}>
        <SvgComponent/>
      </Layout>
        <Layout style = {styles.inputContainer} >
          <Input
            placeholder='Email'
             value = {email}
             onChangeText={text=> setEmail(text)}
            style={styles.input}
            status = 'info'>
          </Input>
        </Layout>
        <Layout style = {styles.inputContainer}>
          <Input
            placeholder='Password'
             value ={password}
             onChangeText = {text=> setPassword(text)}
            style={styles.input}
            status = 'info'
            secureTextEntry>
          </Input>
        </Layout>
        <Layout style = {styles.buttonContainer1}>
          <Button
            onPress={handleSignIn}
            style={styles.button}
            status = 'info'>
              Login
          </Button>
        </Layout>
        <Layout style = {styles.buttonContainer2}>
          <Button
            onPress={handleSignUp}
            style={styles.button}
            appearance='outline'
            status = 'info'>
              Register
          </Button>
        </Layout>
      </Layout>

    </React.Fragment>
  )
}

export default SignInScreen;

const styles = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  birdContainer : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputContainer: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  input: {
    flex: 1 ,
    margin: 2,
  },
  buttonContainer1: {
    flexDirection: 'column',
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
  },
  buttonContainer2: {
    flexDirection: 'column',
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  button: {
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
});