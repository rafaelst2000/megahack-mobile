import React from 'react'
import Constants from 'expo-constants'
import { View,Text,StyleSheet,TouchableOpacity, Image} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Feather as Icon } from '@expo/vector-icons'

import * as Permissions from 'expo-permissions';


const Scan = () => {
  const navigation = useNavigation()

  function handleNavigateBack(){
    navigation.goBack()
  }

  useEffect(() => {
    async function getCameraAsync() {
      const { status, permissions } = await Permissions.askAsync(Permissions.CAMERA);
      if (status === 'granted') {
        console.log("Camera concedida!")
        //return Camera.getCurrentPositionAsync({ e: true });
      } else {
        throw new Error('Location permission not granted');
      }
    }
    getCameraAsync()
  },[])

  return(
  <>  
    <View style={styles.container}>
      <TouchableOpacity onPress={handleNavigateBack}>
        <Icon style={{marginHorizontal: 32}} name="chevron-left" size={30} color="#71bf44"/>
      </TouchableOpacity>

      <View style={styles.main}> 
        <Text style={styles.title}>
          Status Mundial
        </Text>


      </View>     
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