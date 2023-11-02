import React from 'react';
import Main from './components/Main'
import PillCard from './components/PillCard'

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function Navigate() {
  return <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen 
        name="Main"
        component={Main}
        options={{title: 'Главная'}}
      />
      <Stack.Screen 
        name="PillCard"
        component={PillCard}
        options={{title: 'Карточка лекарства'}}
      />
    </Stack.Navigator>
  </NavigationContainer>;
}