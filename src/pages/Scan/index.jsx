import React, { useEffect, useState } from 'react'
import Constants from 'expo-constants'
import { View,Text,StyleSheet, Button} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { BarCodeScanner } from 'expo-barcode-scanner'

import * as Permissions from 'expo-permissions';


const Scan = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

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
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
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
      }}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />

      {scanned && <Button title={'Clique para novo scan'} onPress={() => setScanned(false)} />}
    </View>
        
  </>  
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#140d21',
    paddingTop: 20 + Constants.statusBarHeight,
  },

  main: {
    justifyContent: 'center',
    textAlign: 'center'

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
export default Scan