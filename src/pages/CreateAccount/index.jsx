import React, { useState, useEffect } from 'react'
import { View,Text,StyleSheet, 
Image, KeyboardAvoidingView, Platform, TextInput } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'

const CreateAccount = () => {
  const navigation = useNavigation()

  function handleNavigateBack(){
    navigation.goBack()
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
            placeholder="Nome Completo"
          />

          <TextInput
            style={styles.input}
            placeholder="CPF"
          />

          <TextInput
            style={styles.input}
            placeholder="E-mail"
          />

          <TextInput
            style={styles.input}
            placeholder="Senha"
            secureTextEntry={true}
          />

            <RectButton style={styles.button}>
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
    height: 40,
    borderColor: 'transparent',
    borderBottomColor: 'grey',
    borderWidth: 1,
    marginBottom: 20,
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