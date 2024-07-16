import React from 'react'
import { FlatList, Text, View } from 'react-native'

//Colores
import { globalStyles } from '../../theme/Theme'

//Navegacion
import { type NavigationProp, useNavigation } from '@react-navigation/native'
import type { RootStackParams } from '../../routes/StackNavigator'

//Componentes
import PrimaryButton from '../../components/shared/PrimaryButton'


const products = [
  { id: 1, name: 'Product 1' },
  { id: 2, name: 'Product 2' },
  { id: 3, name: 'Product 3' },
  { id: 4, name: 'Product 4' },
  { id: 5, name: 'Product 5' },
  { id: 6, name: 'Product 6' },
]

const ProductsScreen = () => {

  const navigation = useNavigation<NavigationProp<RootStackParams>>()
  return (
    <React.Fragment>
      <View style={ globalStyles.container }>
        <Text style={{ marginBottom:10, fontSize:30}}>Productos</Text>

        <FlatList
          data={products}
          renderItem={ ({item})=> (
            <PrimaryButton label={item.name} onPress={() => navigation.navigate('Product', { id: item.id , name: item.name } )} />
          )}/>

        <Text style={{ marginBottom:10, fontSize:30}}> Ir a Ajustes </Text>

        <PrimaryButton label={'Llévame a ajustes'} onPress={() => navigation.navigate('Settings')} />
      </View>
    </React.Fragment>
  )
}

export default ProductsScreen