import React, { useState, useEffect } from 'react'
import Constants from 'expo-constants'
import { View,Text,StyleSheet,TouchableOpacity, Image} from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native'
import { Feather as Icon } from '@expo/vector-icons'
import QRCode from 'react-native-qrcode-svg';

const QrCode = () => {
  const navigation = useNavigation()

  const route = useRoute()
  const routeParams = route.params

  function handleNavigateBack(){
    navigation.goBack()
  }

  useEffect(() => {
    console.log("hash: "+routeParams.data)

  })
   
  return(
  <>  
    <View style={styles.container}>
      <TouchableOpacity onPress={handleNavigateBack}>
        <Icon style={{marginHorizontal: 32}} name="chevron-left" size={30} color="#225199"/>
      </TouchableOpacity>

      <View style={styles.main}> 
        <View style={styles.image}>
          <QRCode
            value={routeParams.data}
            logoSize={300}
            logoBackgroundColor='transparent'
          />
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