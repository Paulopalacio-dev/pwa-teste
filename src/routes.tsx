import * as React from 'react';
import { Ionicons} from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/Home'
import Contracts from './screens/Contracts';
import Question from './screens/Question'


const Tab = createBottomTabNavigator();


export default function Routes() {
  return (
    <NavigationContainer>
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
        component={Home}
        options={{tabBarIcon: ({color}) => <Ionicons name="home-outline" size={25} color={color}/>}}
       />

        <Tab.Screen
        name="Contratos"
        component={Contracts}
        options={{tabBarIcon: ({color}) => <Ionicons name="documents-outline" size={25} color={color} />}}
         />

        <Tab.Screen
        name="Dúvidas"
        component={Question}
        options={{tabBarIcon: ({color}) => <Ionicons name="help-circle-outline" size={26} color={color} />}}
        />

        <Tab.Screen
          name="Conta"
          component={Question}
          options={{tabBarIcon: ({color}) => <Ionicons name="person-outline" size={24} color={color} />}}
        />

      </Tab.Navigator>
      
    </NavigationContainer>
  );
}