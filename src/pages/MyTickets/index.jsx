import React from 'react'
import Constants from 'expo-constants'
import { View,Text,StyleSheet,TouchableOpacity, ScrollView} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Feather as Icon } from '@expo/vector-icons'

const AllCountries = () => {
  const navigation = useNavigation()

  function handleGoQRCode(){
    console.log('chamou')
    navigation.navigate('QrCode')
  }

  function handleNavigateBack(){
    navigation.goBack()
  }

  return(
  <>  
    <View style={styles.container}>
      <TouchableOpacity onPress={handleNavigateBack}>
        <Icon style={{marginHorizontal: 32}} name="chevron-left" size={30} color="#225199"/>
      </TouchableOpacity>

      <View style={styles.itemsContainer}>
        <ScrollView 
        contentContainerStyle={{paddingHorizontal: 20}}>
        <TouchableOpacity
           onPress={handleGoQRCode}> 
            <View style={styles.out}>
              <View style={styles.line}>
              
                <Text style={styles.text}>Meu evento</Text>
              
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
           onPress={() => {}}> 
            <View style={styles.out}>
              <View style={styles.line}>
              
                <Text style={styles.text}>Meu evento</Text>
              
              </View>
            </View>
          </TouchableOpacity>
        {/*  {data.map(country => (
          <TouchableOpacity
           key={country.Country} 
           onPress={() => handleSelectedCountry(country.Country)}> 
            <View style={styles.out}>
              <View style={styles.line}>
              
                <Text style={styles.text}>{country.Country}</Text>
              
              </View>
            </View>
           </TouchableOpacity>  
          ))} */}
        
        </ScrollView>
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

  title: {
    color: '#fff',
    padding: 24,
    fontSize: 40,
    fontFamily: 'Ubuntu_700Bold',
    marginTop: 32,
    textAlign: "center",
  },
  
  out: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },

  line: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    padding: 12,
    borderBottomColor: "#225199",
    borderBottomWidth: 2,
    marginBottom: 5
  },

  itemsContainer: {
    flexDirection: 'row',
    marginTop: 16,
    marginBottom: 32,
    paddingBottom: 16,
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

  text: {
    color: 'black',
    fontSize: 28,
    fontFamily: 'Roboto_400Regular',
    maxWidth: 300,
    lineHeight: 32,
  },
})
export default AllCountries