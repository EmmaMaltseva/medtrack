import React, { useState } from 'react';
import { StyleSheet, View, Pressable, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

export default function SwitchScreens({ navigation, props }) {
  
  return (
    <view>
      <View style={styles.containerSwitchScreen}>
        <Pressable style={styles.buttonMedShedule}>
        <Image style={ styles.imgMainButton } source={require('../assets/img/mainScreen.png')}/>
          <Text style={styles.textButtonMedShedule}>Журнал</Text>
        </Pressable>
        <TouchableOpacity onPress={props.onPress}>
          <Ionicons style={styles.buttonSettings} name="ios-settings-sharp" size={22} color="#B4C1D1" />
        </TouchableOpacity>
      </View>
    </view>
  );
}

const styles = StyleSheet.create({
  containerSwitchScreen: {
    paddingTop: 20,
    marginTop: 20,
    marginHorizontal: 10,
    borderTopColor: "#F1F1F1",
    borderTopWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  buttonMedShedule: {
    height: 40,
    width: 110,
    backgroundColor: "rgba(140, 48, 245, 0.13)",
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },

  textButtonMedShedule: {
    color: "#A75DFC",
    fontSize: 13,
    fontFamily: "mp-bold"
  },

  buttonSettings: {
    marginTop: 8
  }

});
