import 'react-native-gesture-handler';
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'

//Navigacion
import StackNavigator from './presentation/routes/StackNavigator';
import SideMenuNavigator from './presentation/routes/SideMenuNavigator';



const App = () => {
  return (
        <NavigationContainer>
          {/* <StackNavigator /> */}
          <SideMenuNavigator />
        </NavigationContainer>
    
  )
}

export default App