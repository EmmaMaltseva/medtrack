import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Image, Pressable, Modal, SafeAreaView, ScrollView } from 'react-native';
import { gStyle } from '../styles/style';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
import Form from "./Form"
import SwitchScreens from './SwitchScreens';
import { Agenda } from 'react-native-calendars';

export default function Main({ navigation }) {
  const [pills, setPills] = useState([
    { date: '2023-11-30', id: '1', name: 'Спазган', type: 'таблетка', dose: 1, unit: 'шт', timeToTake: '12:30', img: require('../assets/img/pill.png')},
    { date: '2023-12-01', id: '2', name: 'Хлоргексилин', type: 'процедура', dose: 1, unit: 'шт', timeToTake: '13:30', img: require('../assets/img/injection.png')},
    { date: '2023-12-02', id: '3', name: 'Левомицетин', type: 'капля', dose: 3, unit: 'мл', timeToTake: '22:30', img: require('../assets/img/drop.png')}
  ]);

  let days = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота'
  ];

  let d = new Date();
  let n = d.getDay();
  let dayOfWeek = days[n];

  const [modalWindow, setModalWindow] = useState(false);

  const addPill = (pill) => {
    setPills((list) => {
      pill.id = Math.random().toString();
      pill.img = (() => {
          if (pill.type == "капля") {
            return require('../assets/img/drop.png');
          } else {
            return require('../assets/img/pill.png');
          }
        }
      )
      return [
        pill,
        ...list
      ]
    })
    setModalWindow(false);
  }

  return (
    <View style={gStyle.main}>
      <Modal visible={modalWindow}>
        <View style={styles.formAddPill}>
          <View style={styles.formAddPilTitle}>
            <Text style={styles.formAddPillTitleText}>Добавление лекарства</Text>
            <AntDesign name="close" size={30} color="black" style={styles.buttonClose} onPress={() => setModalWindow(false)}/>
          </View>
          <Form addPill={addPill}/>
        </View>  
      </Modal>

      <SafeAreaView style={styles.container}>
        <Agenda item={pills}/>
      </SafeAreaView>

      <View style={ styles.mainContainer }>
        <Text style={ styles.header }>
          <p style={ styles.chooseDay }>Сегодня</p>
          <p style={ styles.day }>{dayOfWeek}, 23 ноября</p>
        </Text>
        {/*в data прописываем с каким массивом работаем*/}
        <FlatList style={styles.items} data={pills} renderItem={({item}) => (
          <TouchableOpacity style={styles.item} onPress={()=> navigation.navigate('SettingsScreen')}>
            <Image style={ styles.img } source={item.img}/>
            <View style={styles.itemDescription}>
              <View style={styles.itemLeftDescription}>
                <Text style={styles.title}>{ item.name }</Text>
                <View style={styles.doseType}>
                  <Text style={styles.dose}>{ item.dose }</Text>
                  <Text style={styles.type}>{ item.type }</Text>
                </View>
              </View>
              <Text style={styles.timeToTake}>{ item.timeToTake }</Text>
            </View>
          </TouchableOpacity>
        )}/>
        <AntDesign name="plussquare" size={55} style={styles.buttonAdd} onPress={() => setModalWindow(true)}/>
        
        <View style={styles.containerSwitchScreen}>
          <Pressable style={styles.buttonMedShedule}>
          <Image style={ styles.imgMainButton } source={require('../assets/img/mainScreen.png')}/>
            <Text style={styles.textButtonMedShedule}>Журнал</Text>
          </Pressable>
          <TouchableOpacity onPress={()=> navigation.navigate('SettingsScreen')}>
            <Ionicons style={styles.buttonSettings} name="ios-settings-sharp" size={22} color="#B4C1D1" />
          </TouchableOpacity>
        </View>   
      </View>
    </View>
  ); 
}

const styles = StyleSheet.create({
  /**Стили для Agenda */
  container: {
    flex: 1,
    justifyContent: 'center'
  },

  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },

  itemText: {
    color: '#888',
    fontSize: 16,
  },
  /** */

  header: {
    margin: 0,
    fontSize: 20,
    color: '#4B3367',
    lineHeight: 'normal',
    textAlign: 'left'
  },

  mainContainer: {
    padding: 20,
    backgroundColor: 'rgb(255,255,255)',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    height: '100vh'
  },

  items: {
    marginTop: 35,
  },
  
  item: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F1F1',
    borderTopWidth: 1,
    borderTopColor: '#F1F1F1'
  },
/**border-bottom: 1px solid #F1F1F1; */
  itemDescription: {
    marginLeft: 16,
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '80%'
  },

  itemLeftDescription: {
  },

  img: {
    width: 46, 
    height: 46
  },

  title: {
    fontFamily: 'mp-semi-bold',
    fontSize: 17,
    color: '#39343E'
  },

  doseType: {
    display: 'inline',
    fontFamily: 'mp-semi-bold',
    fontSize: 13
  },

  dose: {
    color: '#7E8B93'
  },

  type: {
    marginLeft: 4,
    color: '#7E8B93'
  },  

  chooseDay: {
    margin: 0,
    fontSize: 15,
    fontFamily: 'mp-light',
  },

  day: {
    margin: 0,
    fontSize: 22,
    fontFamily: 'mp-bold'
  },

  timeToTake: {
    fontFamily: 'mp-semi-bold',
    fontSize: 18,
    color: '#7E8B93'
  },

  buttonAdd: {
    textAlign: 'right',
    color: "#A75DFC",
    borderRadius: 13
  },

  formAddPill: {
    marginLeft: 10,
    marginRight: 10
  },

  formAddPilTitle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignItems: 'center'
  },

  formAddPillTitleText: {
    marginTop: 60,
    paddingLeft: 80,
    fontFamily: 'mp-semi-bold',
    fontSize: 18,
    color: '#39343E'
  },

  buttonClose: {
    marginTop: 60,
    marginRight: 20
  },

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

{/*<Agenda
          selected="2022-12-01"
          items={{
            '2022-12-01': [{name: 'Cycling'}, {name: 'Walking'}, {name: 'Running'}],
            '2022-12-02': [{name: 'Writing'}]
          }}
          renderItem={(item, isFirst) => (
            <TouchableOpacity style={styles.item}>
              <Text style={styles.itemText}>{item.name}</Text>
            </TouchableOpacity>
          )}
          theme={{
            calendarBackground: '#F4F5F7',
            dayTextColor: '#554863',
            agendaTodayColor: 'red'
          }}
        />*/}