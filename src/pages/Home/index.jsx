import React from 'react'
import { View,Text,StyleSheet, 
         Image, KeyboardAvoidingView, Platform, TextInput } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'

const Home = () => {
  const navigation = useNavigation()

  const [password, setPassword] = React.useState('')
  const [email, setEmail] = React.useState('')

  const [isTrue, setTrue] = React.useState(false)

  function handleNavigateToCreateAccount(){
    navigation.navigate('CreateAccount')
  }

  function handleNavigateToLoginCompany(){
    navigation.navigate('LoginCompany')
  }

  async function handleNavigateToMyTickets(){
    setTrue(false)
    const data = {
      email,
      password
    }
    try {
      const response = await axios({
        method: 'post',
        url: 'https://mega-hack-api.herokuapp.com/userLogin',
        data
      })
      navigation.navigate('MyTickets')
    } catch (error) {
      setTrue(true)
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
              label="Email"
              placeholder="Digite seu Email"
              value={email}
              onChangeText={email => setEmail(email)}
            />
            
            <TextInput
              style={styles.input}
              label="Senha"
              placeholder="Digite sua Senha"
              value={password}
              onChangeText={password => setPassword(password)}
              secureTextEntry={true}
            />

              <RectButton style={styles.button} onPress={handleNavigateToMyTickets}>
                <Text style={styles.buttonText}>Entrar</Text>
              </RectButton>

              <RectButton style={styles.buttonSecondary} onPress={handleNavigateToLoginCompany} >
                <Text style={styles.buttonTextSecondary}>Entrar como empresa</Text>
              </RectButton>

              <RectButton style={styles.buttonSecondary} onPress={handleNavigateToCreateAccount}>
                <Text style={styles.buttonTextSecondary}>Criar conta</Text>
              </RectButton>
              
            {isTrue ?
              <View style={styles.buttonSecondary}>
                <Text style={styles.textError}>Email ou senha inválidos</Text>
              </View> : false
            }
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
  },

  textError: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: 'red',
    fontWeight: 'bold',
    fontFamily: 'Roboto_500Medium',
    fontSize: 24,
  },
});

export default Home