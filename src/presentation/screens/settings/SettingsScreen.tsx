import React from 'react'
import { Text, View } from 'react-native'
import { globalStyles } from '../../theme/Theme'
import PrimaryButton from '../../components/shared/PrimaryButton'
import { StackActions, useNavigation } from '@react-navigation/native'

const SettingsScreen = () => {

  const navigation = useNavigation()
  return (
    <React.Fragment>
      <View style={ globalStyles.container }>
        <Text>Settings Screen</Text>

        <PrimaryButton label={'Regresar'} onPress={() =>navigation.goBack()} />
        <PrimaryButton label={'Ir al Incio'} onPress={() =>navigation.dispatch(StackActions.popToTop())} />
      </View>
    </React.Fragment>
  )
}

export default SettingsScreen