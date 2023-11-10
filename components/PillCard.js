import React, { useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { gStyle } from '../styles/style';

export default function PillCard({ route }) {
  
  /*const loadScene = () => {
    navigation.goBack();
  }*/

  return (
    <View style={gStyle.main}>
      <Image style={ styles.img } source={route.params.img}/>
      <Text style={gStyle.title}>{route.params.name}</Text>
      <Text style={gStyle.title}>{route.params.type}</Text>
      <Text style={gStyle.title}>{route.params.timeToTake}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 46, 
    height: 46
  },
});
