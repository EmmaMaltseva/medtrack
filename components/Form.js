import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
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
          <View>
            <TextInput
              
              value={props.values.name} 
              placeholder='Название' 
              onChangeText={props.handleChange('name')} /*Каждый раз при вводе мы изменяем name*/
            /> 
            <TextInput
              value={props.values.type} 
              placeholder='Тип лекарства' 
              onChangeText={props.handleChange('type')} 
            /> 
            <TextInput
              value={props.values.dose} 
              placeholder='Разовая доза' 
              onChangeText={props.handleChange('dose')} 
            /> 
            <TextInput
              value={props.values.unit} 
              placeholder='Единица измерения' 
              onChangeText={props.handleChange('unit')} 
            /> 
            <TextInput
              value={props.values.timeToTake} 
              placeholder='Время приема' 
              onChangeText={props.handleChange('timeToTake')} 
            /> 
            <Button title='Готово' onPress={props.handleSubmit}/>
          </View>
        )}
      </Formik>
    </view>
  );
}

const styles = StyleSheet.create({

});
