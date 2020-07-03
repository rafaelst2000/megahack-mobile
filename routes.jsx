import React from 'react'
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import Home from './src/pages/Home'
import LoginCompany from './src/pages/LoginCompany'
import CreateAccount from './src/pages/CreateAccount'
import MyTickets from './src/pages/MyTickets'
import QrCode from './src/pages/QrCode'
import Scan from './src/pages/Scan'


const AppStack = createStackNavigator()

const Routes = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator headerMode="none" screenOptions={{cardStyle: {backgroundColor: '#f0f0f5'}}}>
        
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="CreateAccount" component={CreateAccount} />
        <AppStack.Screen name="LoginCompany" component={LoginCompany} />
        <AppStack.Screen name="MyTickets" component={MyTickets} />
        <AppStack.Screen name="QrCode" component={QrCode} />
        <AppStack.Screen name="Scan" component={Scan} />

      </AppStack.Navigator>
    </NavigationContainer>
  )
}
export default Routes