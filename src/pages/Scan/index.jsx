import React, { useEffect, useState } from 'react'
import Constants from 'expo-constants'
import { View,Text,StyleSheet, Button, Image} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { BarCodeScanner } from 'expo-barcode-scanner'
import axios from 'axios'

import * as Permissions from 'expo-permissions';


const Scan = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);7

  const navigation = useNavigation()

  function handleNavigateBack(){
    navigation.goBack()
  }

  useEffect(() => {
    async function getCameraAsync() {
      const { status, permissions } = await Permissions.askAsync(Permissions.CAMERA);
      if (status === 'granted') {
      } else {
        throw new Error('Você precisa dar permissão da câmera.');
      }
    }
    getCameraAsync()
  },[])

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    checkBarCode(data)
    async function checkBarCode(data){
      try {
        const response = await axios({
          method: 'post',
          url: 'https://mega-hack-api.herokuapp.com/checkTicket',
          data: {code: data}
        })
        alert("Cupom Válido")
      } catch (error) {
        alert("Cupom inválido")
        console.log(error)
      }
    }
  };

    if (hasPermission === null) {
      return <Text>Pedindo permissão da câmera...</Text>;
    }
    if (hasPermission === false) {
      return <Text>Sem acesso à câmera :(</Text>;
    }

  return(
  <>  
     <View
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        backgroundColor: 'black'
      }}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={[StyleSheet.absoluteFill, styles.container]}>
        <Text style={styles.description}>Posicione o QR Code</Text>
        <Image
          style={styles.qr}
          source={require('../../assets/qr.png')}
        />
        {scanned &&
        <Text
        onPress={() => setScanned(false)}
        style={styles.new}>
        Clique para Novo Scan
        </Text>}

        <Text
          onPress={handleNavigateBack}
          style={styles.cancel}>
          Voltar
        </Text>
      </BarCodeScanner>
    </View>
        
  </>  
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  qr: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '50%',
    width: 250,
    height: 250,
  },
  description: {
    fontSize: 24,
    marginTop: '10%',
    textAlign: 'center',
    width: '70%',
    color: 'white',
  },
  new: {
    fontSize:  24,
    textAlign: 'center',
    width: '70%',
    color: 'white',
    marginTop: 20
  },

  cancel: {
    fontSize:  24,
    textAlign: 'center',
    width: '70%',
    color: 'white',
    marginTop: 50,
  },

})
export default Scan