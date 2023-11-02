import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { gStyle } from '../styles/style';

export default function PillCard({ navigation }) {
  
  /*const loadScene = () => {
    navigation.goBack();
  }*/

  return (
    <View style={gStyle.main}>
      <Text style={gStyle.title}>Hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({

});
