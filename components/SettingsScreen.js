import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { gStyle } from '../styles/style';

export default function SettingsScreen({ navigation }) {
  
  /*const loadScene = () => {
    navigation.goBack();
  }*/

  return (
    <View style={gStyle.main}>
      <Text>Настройки</Text>
      <Text>Профиль</Text>
      <TextInput
        style={styles.formInput}
        placeholder='Имя' 
        placeholderTextColor="#7E8B93"
      /> 
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 46, 
    height: 46
  },
});
