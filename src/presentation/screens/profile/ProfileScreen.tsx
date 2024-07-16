import React from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import PrimaryButton from '../../components/shared/PrimaryButton';
import { DrawerActions, useNavigation } from '@react-navigation/native';

const ProfileScreen = () => {

  const { top  } = useSafeAreaInsets();
  const navigation = useNavigation();
  return (
    <React.Fragment>
        <View style={{ 
          flex:1,
          paddingHorizontal:20,
          marginTop: top
          }}>
            <Text style={{ fontWeight: 'bold' }}>Profile</Text>
            
            <PrimaryButton
              label='Abrir Menu'
              onPress={() =>navigation.dispatch(DrawerActions.openDrawer())}
            />
        </View>
    </React.Fragment>
  )
}

export default ProfileScreen