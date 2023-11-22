import React from 'react';
import Main from './components/Main'
import SettingsScreen from './components/SettingsScreen'
import { gStyle } from './styles/style'

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function Navigate() {
  return <NavigationContainer style={gStyle.mainmain}>
    <Stack.Navigator>
      <Stack.Screen 
        name="Main"
        component={Main}
        options={
          {
            headerStyle: {backgroundColor: '#F4F5F7', height: 0},
          }
        }
      />
      <Stack.Screen 
        name="SettingsScreen"
        component={SettingsScreen}
        options={{title: 'Настройки'}}
      />
    </Stack.Navigator>
  </NavigationContainer>;
}