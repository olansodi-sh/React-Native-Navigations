import { DrawerActions, useNavigation } from '@react-navigation/native';
import { Pressable, Text } from 'react-native'
import React, { useEffect } from 'react'

const MenuHamburguer = () => {

    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
          headerLeft: () => (
            <Pressable onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} >
                <Text>Menu</Text>
            </Pressable>
          )
        })
      }, [])
  return (<></>)
}

export default MenuHamburguer