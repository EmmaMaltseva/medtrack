import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { gStyle } from '../styles/style';

export default function PillCard({ route }) {
  
  /*const loadScene = () => {
    navigation.goBack();
  }*/

  return (
    <View style={gStyle.main}>
      <Text style={gStyle.title}>{route.params.name}</Text>
      <Text style={gStyle.title}>{route.params.type}</Text>
      <Text style={gStyle.title}>{route.params.timeToTake}</Text>
    </View>
  );
}

const styles = StyleSheet.create({

});
