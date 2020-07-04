import React, { useState, useEffect } from 'react'
import { View,Text,StyleSheet, 
Image, KeyboardAvoidingView, Platform, TextInput } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'

const CreateAccount = () => {
  const navigation = useNavigation()

  const [name, setName] = React.useState('')
  const [cpf, setCpf] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [email, setEmail] = React.useState('')

  function handleNavigateBack(){
    navigation.goBack()
  }

  async function handleCreateAccount(){
    const data = {
      name,
      email,
      password,
      cpf,
    }
    try {
      const response = await axios({
        method: 'post',
        url: 'https://mega-hack-api.herokuapp.com/user',
        data
      })
      navigation.navigate('Home')
    } catch (error) {
      throw error
    }

  }


  return(
  <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.OS === 'ios' ? 'padding': undefined}>
    <View style={styles.container}>
      <View style={styles.main}> 
       
        <View style={styles.title}>
          <Image source={require('../../assets/logo.png')}
            style={styles.logo}/>
        </View>

        <View style={styles.card_out}>
          <View style={styles.card}>
          <TextInput
            style={styles.input}
            label="Nome"
            placeholder="Nome Completo"
            value={name}
            onChangeText={name => setName(name)}
          />

          <TextInput
            style={styles.input}
            label="CPF"
            placeholder="CPF"
            value={cpf}
            onChangeText={cpf => setCpf(cpf)}
          />

          <TextInput
            style={styles.input}
            label="Email"
            placeholder="E-mail"
            value={email}
            onChangeText={email => setEmail(email)}
          />

          <TextInput
            style={styles.input}
            label="Senha"
            placeholder="Senha"
            value={password}
            onChangeText={password => setPassword(password)}
            secureTextEntry={true}
          />

            <RectButton style={styles.button} onPress={handleCreateAccount}>
              <Text style={styles.buttonText}>Criar conta</Text>
            </RectButton>

            <RectButton style={styles.buttonSecondary} onPress={handleNavigateBack}>
              <Text style={styles.buttonTextSecondary}>Voltar</Text>
            </RectButton>
          </View>
      </View>  

      </View>

    </View>
  </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f55625',
  },

  main: {
    flex: 1,
    justifyContent: 'flex-start',
    marginVertical: 32,
  },

  input: {
    height: 60,
    borderColor: 'transparent',
    borderBottomColor: 'grey',
    borderWidth: 1,
    marginBottom: 20,
    fontSize: 20
  },

  title: {
    alignItems: 'center',
  },
  card_out:{
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 20,
  },
  
  button: {
    backgroundColor: '#225199',
    height: 60,
    marginRight: 'auto',
    flexDirection: 'row',
    borderRadius: 8,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 8,
  },

  buttonText: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#f5f5f0',
    fontWeight: 'bold',
    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
  },

  buttonSecondary: {
    backgroundColor: '#fff',
    height: 60,
    marginRight: 'auto',
    flexDirection: 'row',
    borderRadius: 8,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 8,
  },

  buttonTextSecondary: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#225199',
    fontWeight: 'bold',
    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
  }
});

export default CreateAccount