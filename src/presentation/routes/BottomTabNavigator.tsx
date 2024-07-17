import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tab1Screen from '../screens/tabs/Tab1Screen';
import Tab2Screen from '../screens/tabs/Tab2Screen';
import Tab3Screen from '../screens/tabs/Tab3Screen';
import { globalColors } from '../theme/Theme';
import { Text } from 'react-native';
import TopTabNavigator from './TopTabNavigator';
import StackNavigator from './StackNavigator';
import IconComponent from '../components/shared/IconComponent';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
        sceneContainerStyle={{
            backgroundColor: globalColors.background
        }}
        screenOptions={{
            // headerShown: false,
            tabBarLabelStyle:{
                marginBottom:5
            },
            headerStyle:{
                elevation:0,
                borderColor:'transparent',
                shadowColor:'transparent',
            },
            tabBarStyle:{
                borderTopWidth:0,
                elevation:0,
            }

        }}
    >
    <Tab.Screen 
    name="Tab1" 
    options={{ title:'Tab1', tabBarIcon:()=>(<IconComponent name="ellipsis-vertical-outline" size={30} color="#000" />)}} 
    component={Tab1Screen} />
    <Tab.Screen 
    name="Tab2" 
    options={{ title:'Tab2', tabBarIcon:()=>(<IconComponent name="american-football-outline" size={30} color="#000" />)}} 
    component={TopTabNavigator} />
    <Tab.Screen 
    name="Tab3" 
    options={{ title:'StackNavigator', tabBarIcon:()=>(<IconComponent name="beer-outline" size={30} color="#000" />)}} 
    component={StackNavigator} />
  </Tab.Navigator>
  )
}

export default BottomTabNavigator