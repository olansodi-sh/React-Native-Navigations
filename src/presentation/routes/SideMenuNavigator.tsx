import React from 'react'
import { Dimensions, View } from 'react-native';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

import { globalColors } from '../theme/Theme';

import StackNavigator from './StackNavigator';
import BottomTabNavigator from './BottomTabNavigator';
import ProfileScreen from '../screens/profile/ProfileScreen';
import IconComponent from '../components/shared/IconComponent';

const Drawer = createDrawerNavigator();

const { width, height } = Dimensions.get('window');

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
    <Drawer.Screen
    options={{
      drawerIcon:()=>(<IconComponent name="home" size={30} color="#000" />)
    }} 
    name="BottomTabNavigator" component={BottomTabNavigator} />
    <Drawer.Screen
    options={{
      drawerIcon:()=>(<IconComponent name="home" size={30} color="#000" />)
    }} 
    name="Profile" component={ProfileScreen} />
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