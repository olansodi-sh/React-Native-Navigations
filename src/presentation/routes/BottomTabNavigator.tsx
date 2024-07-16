import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tab1Screen from '../screens/tabs/Tab1Screen';
import Tab2Screen from '../screens/tabs/Tab2Screen';
import Tab3Screen from '../screens/tabs/Tab3Screen';
import { globalColors } from '../theme/Theme';
import { Text } from 'react-native';

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
    <Tab.Screen name="Tab1" options={{ title:'Tab1', tabBarIcon:()=>(<Text>Tab1</Text>)}} component={Tab1Screen} />
    <Tab.Screen name="Tab2" options={{ title:'Tab2', tabBarIcon:()=>(<Text>Tab2</Text>)}} component={Tab2Screen} />
    <Tab.Screen name="Tab3" options={{ title:'Tab3', tabBarIcon:()=>(<Text>Tab3</Text>)}} component={Tab3Screen} />
  </Tab.Navigator>
  )
}

export default BottomTabNavigator