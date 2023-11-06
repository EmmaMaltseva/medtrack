import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, FlatList } from 'react-native';
import { gStyle } from '../styles/style';

export default function Main({ navigation }) {

  const [pills, setPills] = useState([
    { name: 'Спазган', type: 'Таблетка', dose: 1, unit: 'шт', timeToTake: '12:30'},
    { name: 'Хлоргексилин', type: 'Процедура', dose: 1, unit: 'шт', timeToTake: '13:30'},
    { name: 'Левомицетин', type: 'Капли', dose: 3, unit: 'мл', timeToTake: '22:30'}
  ]);

  return (
    <View style={gStyle.main}>
      <Text style={gStyle.title}>MedTrack</Text>
      {/*в data прописываем с каким массивом работаем*/}
      <FlatList data={pills} renderItem={({item}) => (
        <TouchableOpacity onPress={()=> navigation.navigate('PillCard', item)}>
          <Text>{ item.name }</Text>
          <Text>{ item.type }</Text>
          <Text>{ item.timeToTake }</Text>
        </TouchableOpacity>
      )}/>
    </View>
  ); 
}

