import 'react-native-gesture-handler';
import React from 'react';
import { Ionicons} from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home'
import Values from './screens/Values';
import Period from './screens/Period';
import Options from './screens/Options';

const Stack = createNativeStackNavigator();

function StackScreens() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}> 
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Values" component={Values} />
    <Stack.Screen name="Period" component={Period} />
    <Stack.Screen name="Options" component={Options}  />
  </Stack.Navigator>
   );
 }

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (

    <NavigationContainer >
      <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor:"#D22688",
      tabBarInactiveTintColor:"black",
      tabBarLabelPosition:"below-icon",
      tabBarStyle: { height: 50,borderTopWidth: 0, marginBottom: 20, marginTop:10, marginHorizontal:30},
      headerStyle:{height: 0},
      
    }}
  >
    
    <Tab.Screen 
    name="Início"
    component={StackScreens}
    options={{tabBarIcon: ({color}) => <Ionicons name="home-outline" size={25} color={color}/>}}
   />

    <Tab.Screen
    name="Valores"
    component={Values}
    options={{tabBarIcon: ({color}) => <Ionicons name="documents-outline" size={25} color={color} />}}
     />

    <Tab.Screen
    name="Período"
    component={Period}
    options={{tabBarIcon: ({color}) => <Ionicons name="help-circle-outline" size={26} color={color} />}}
    />

    <Tab.Screen
      name="Opções"
      component={Options}
      options={{tabBarIcon: ({color}) => <Ionicons name="person-outline" size={24} color={color} />}}
    />

  </Tab.Navigator>
  
     
    </NavigationContainer>
  );
}