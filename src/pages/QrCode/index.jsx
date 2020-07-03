import React, { useState, useEffect } from 'react'
import Constants from 'expo-constants'
import { View,Text,StyleSheet,TouchableOpacity, Image} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Feather as Icon } from '@expo/vector-icons'
import axios from 'axios'

const QrCode = () => {
  const navigation = useNavigation()

  function handleNavigateBack(){
    navigation.goBack()
  }

  useEffect(() => {
    async function returnData(){
      try {
        const response = await axios({
          method: 'get',
          url: 'https://mega-hack-api.herokuapp.com/qrcode',
          responseType: 'arraybuffer',
        })
        console.log(response.data)
      } catch (error) {
        throw error
      }
    } 
    returnData()
  }, [])
   
  return(
  <>  
    <View style={styles.container}>
      <TouchableOpacity onPress={handleNavigateBack}>
        <Icon style={{marginHorizontal: 32}} name="chevron-left" size={30} color="#225199"/>
      </TouchableOpacity>

      <View style={styles.main}> 
        <View style={styles.image}>
            <Image source={require('../../assets/bg.png')}
            style={{width: 345, height: 345}}/>
          </View>
      </View>
      
    </View>
        
  </>  
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f55625',
    paddingTop: 20 + Constants.statusBarHeight,
  },

  main: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center'
  },


  title: {
    color: '#fff',
    padding: 24,
    fontSize: 40,
    fontFamily: 'Ubuntu_700Bold',
    marginTop: 32,
    textAlign: "center",
  },

  table: {
    padding: 32
  },

})
export default QrCode