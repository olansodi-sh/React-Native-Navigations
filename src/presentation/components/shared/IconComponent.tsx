import Icon from 'react-native-vector-icons/Ionicons';

interface IconComponentProps {
    name: string;
    size?: number;
    color?: string;
    
}

const IconComponent = ({ name, size=20, color='black' }:IconComponentProps) => {
  return (
    <Icon name={name} size={size} color={color} />
  )
}

export default IconComponent