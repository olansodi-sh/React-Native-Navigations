import React from 'react'
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import StackNavigator from './StackNavigator';
import ProfileScreen from '../screens/profile/ProfileScreen';
import { globalColors, globalStyles } from '../theme/Theme';
import { useWindowDimensions, View } from 'react-native';

const Drawer = createDrawerNavigator();

const { width, height } = useWindowDimensions();

const SideMenuNavigator = () => {
  return (
    <Drawer.Navigator
      //Se crear el componente que se mostrara en el drawer
      drawerContent={(props) => 
        <CustomDrawerContent {...props} />
      }
      screenOptions={{
        headerShown: false,
        drawerType:  (width >= 758)? 'permanent' : 'slide',

        drawerActiveBackgroundColor: '#fefea0',
        drawerActiveTintColor: '#000',
        drawerInactiveTintColor: globalColors.primary,

        drawerItemStyle:{
          marginVertical: 10,
          borderRadius: 10
        }
      }}
    >
    <Drawer.Screen name="StackNavigator" component={StackNavigator} />
    <Drawer.Screen name="Profile" component={ProfileScreen} />
  </Drawer.Navigator>
  )
}

export default SideMenuNavigator 

const CustomDrawerContent = (props:DrawerContentComponentProps) => {
  return(
    <DrawerContentScrollView>
      <View style={{ 
        backgroundColor:globalColors.primary, 
        height:200, 
        margin:30, 
        borderRadius:50
        }}/>
        <DrawerItemList {...props} />
    </DrawerContentScrollView>
  )
}