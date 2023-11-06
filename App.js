import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading'
import MainStack from './navigate'

/* Ассинхронно подключаем шрифты */
const fonts = () => Font.loadAsync({ 
  'mp-bold': require('./assets/fonts/Manrope-Bold.ttf'),
  'mp-semi-bold': require('./assets/fonts/Manrope-SemiBold.ttf'),
  'mp-light': require('./assets/fonts/Manrope-Light.ttf')
})

export default function App() {
  const [font, setFont] = useState(false);

  if(font) {
    return (
      <MainStack />
    );
  } else {
    return (
      <AppLoading 
        startAsync={fonts} 
        onFinish={() => setFont(true)}
        onError={console.warn}
      />
    );
  } 
}

const styles = StyleSheet.create({

});
