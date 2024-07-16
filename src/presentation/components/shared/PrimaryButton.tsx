import React from 'react'
import { Pressable, Text } from 'react-native'
import { globalStyles } from '../../theme/Theme'

interface PrimaryButtonProps {
    label: string,
    onPress: () => void,

    
}

const PrimaryButton = ({ label: name, onPress }: PrimaryButtonProps) => {
  return (
    <Pressable 
    style={globalStyles.primaryButton}
    onPress={onPress}>
    <Text style={globalStyles.buttonText}>{name}</Text>
  </Pressable>
  )
}

export default PrimaryButton