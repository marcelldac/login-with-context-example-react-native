import React, {useState, useContext} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import {AuthContext} from '../../contexts/auth'

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {signIn} = useContext(AuthContext)

  function handleLogin(){
    signIn(email, password)
  }

  return(
    <View style={styles.container}>
      <Text>Seja bem-vindo(a)</Text>

      <TextInput 
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
        placeholder='Digite seu e-mail'
      />

      <TextInput 
        style={styles.input}
        value={password}
        onChangeText={(text) => setPassword(text)}
        placeholder='Digite sua senha'
      />

      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Acessar</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderRadius: 10,
    backgroundColor: 'gray',
  },
  button: {
    backgroundColor: 'red',
  },
  buttonText: {
    color: 'white',
  },
})