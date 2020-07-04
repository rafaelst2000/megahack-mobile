import React, { useEffect } from 'react'
import Constants from 'expo-constants'
import { View,Text,StyleSheet,TouchableOpacity, ScrollView} from 'react-native'
import { useRoute ,useNavigation } from '@react-navigation/native'
import { Feather as Icon } from '@expo/vector-icons'
import { useState } from 'react'
import axios from 'axios'

const AllCountries = () => {
  const route = useRoute()
  const routeParams = route.params


useEffect(() => {
  async function getTickets(){
    try {
      const response = await axios({
        method: 'get',
        url: 'https://mega-hack-api.herokuapp.com/user',
      })
      setTickets(response.data[0].tickets)
      console.log(response.data[0].tickets)
    } catch (error) {
    }
  }  
    getTickets()
  },[])
  
  const [tickets, setTickets] = useState([])

  const navigation = useNavigation()

  function handleGoQRCode(hash, name){
    const data = [hash, name]
    navigation.navigate('QrCode', {data})
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

      <View style={styles.outContainer}>
        <View style={styles.itemsContainer}>
          <ScrollView 
          contentContainerStyle={{paddingHorizontal: 20}}>

          {tickets.map(ticket => (
            <TouchableOpacity
            key={String(ticket.id)}
            onPress={() => handleGoQRCode(ticket.users_tickets.qr_code_id_hash, ticket.name)}> 
              <View style={styles.out}>
                <View style={styles.line}>
                  <Text style={styles.text}>{ticket.name}</Text>
                </View>
              </View>
            </TouchableOpacity>
            ))}
          
          </ScrollView>
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

  outContainer: {
    flex: 1,
    padding: 20,
  },

  itemsContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 8,
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