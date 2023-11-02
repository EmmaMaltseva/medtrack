import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { gStyle } from '../styles/style';

export default function Main() {
  return (
    <View style={gStyle.main}>
      <Text style={gStyle.title}>MedTrack</Text>
    </View>
  ); 
}

