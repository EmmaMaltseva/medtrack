import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Pressable, Text } from 'react-native';
import { gStyle } from '../styles/style';
import { Formik } from 'formik';

export default function From({ addPill }) {
  
  return (
    <view>
      {/**Формик позваляет быстро получать и обрабатывать введенные данные */}
      {/**Благодаря параметру action получаем доступ ко множеству функций. В нашем случае для очистки формы после сабмита */}
      <Formik initialValues={{name: '', type: '', dose: '', unit: '', timeToTake: ''}} onSubmit={(values, action) => { 
        addPill(values);
        action.resetForm();
      }}>
        {(props) => (
          <View style={styles.formWithInputButton}>
            <TextInput
              style={styles.formInput}
              value={props.values.name} 
              placeholder='Название' 
              placeholderTextColor="#7E8B93"
              onChangeText={props.handleChange('name')} /*Каждый раз при вводе мы изменяем name*/
            /> 
            <TextInput
              style={styles.formInput}
              value={props.values.type} 
              placeholderTextColor="#7E8B93"
              placeholder='Тип лекарства' 
              onChangeText={props.handleChange('type')} 
            /> 
            <TextInput
              style={styles.formInput}
              value={props.values.dose}
              keyboardType='number-pad'
              placeholderTextColor="#7E8B93" 
              placeholder='Разовая доза' 
              onChangeText={props.handleChange('dose')} 
            /> 
            <TextInput
              style={styles.formInput}
              value={props.values.unit} 
              placeholderTextColor="#7E8B93"
              placeholder='Единица измерения' 
              onChangeText={props.handleChange('unit')} 
            /> 
            <TextInput
              style={styles.formInput}
              value={props.values.timeToTake} 
              placeholderTextColor="#7E8B93"
              placeholder='Время приема' 
              onChangeText={props.handleChange('timeToTake')} 
            /> 
            <Pressable style={styles.buttonDone} title='Готово' onPress={props.handleSubmit}>
              <Text style={styles.textButton}>Готово</Text>
            </Pressable>
          </View>
        )}
      </Formik>
    </view>
  );
}

const styles = StyleSheet.create({
  formWithInputButton: {
    marginTop: 45
  },

  formInput: {
    paddingLeft: 10,
    outlineStyle: 'none',
    lineHeight: 40,
    borderBottomColor: "#E5E6EB",
    borderBottomWidth: 1,
    fontSize: 16,
    fontFamily: 'mp-semi-bold',
    margin: '10px'
  },

  buttonDone: {
    backgroundColor: '#2EC5CE',
    height: 44,
    width: 270,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 0,
    marginHorizontal: 'auto',
    marginTop: 50,
    borderRadius: 11
  },

  textButton: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'mp-semi-bold',
  }

});
