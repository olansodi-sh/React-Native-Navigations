import React from 'react'
import { View } from 'react-native'

//Colores
import { globalStyles } from '../../theme/Theme'

//Navegacion
import { type NavigationProp, useNavigation } from '@react-navigation/native'
import type { RootStackParams } from '../../routes/StackNavigator'

//Componentes
import PrimaryButton from '../../components/shared/PrimaryButton'

const HomeScreen = () => {

  const navigation = useNavigation<NavigationProp<RootStackParams>>()
  return (
    <React.Fragment>
      <View style={ globalStyles.container}>

        <PrimaryButton label={'Ir a Productos'} onPress={() => navigation.navigate('Products')} />
        <PrimaryButton label={'Ir a Settings'} onPress={() => navigation.navigate('Settings')} />
      </View>
    </React.Fragment>
  )
}

export default HomeScreen