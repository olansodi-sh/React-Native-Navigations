import { DrawerActions, useNavigation } from '@react-navigation/native';
import { Pressable, Text } from 'react-native'
import React, { useEffect } from 'react'
import IconComponent from './IconComponent';

const MenuHamburguer = () => {

    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
          headerLeft: () => (
            <Pressable style={{ marginLeft:10 }} onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} >
                <IconComponent name="menu" size={30} color="#000" />
            </Pressable>
          )
        })
      }, [])
  return (<></>)
}

export default MenuHamburguer