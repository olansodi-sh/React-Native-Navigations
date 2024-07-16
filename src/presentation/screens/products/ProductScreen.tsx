import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { Text } from 'react-native'
import { RootStackParams } from '../../routes/StackNavigator'



const ProductScreen = () => {

  // Se toman los parametros de la ruta      
  const params = useRoute<RouteProp<RootStackParams,'Product'>>().params
  const navigation = useNavigation()
  useEffect(() => {
    navigation.setOptions({
      title: params.name,
    })
  }, [])

  
  return (
    <React.Fragment>
        <Text>Detalle del Producto</Text>

        <Text>Id: {params.id}</Text>
        <Text>Nombre: {params.name}</Text>

    </React.Fragment>
  )
}

export default ProductScreen