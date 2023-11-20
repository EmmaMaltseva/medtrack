import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Image, Button, Modal } from 'react-native';
import { gStyle } from '../styles/style';
import { AntDesign } from '@expo/vector-icons';
import Form from "./Form"
class Question extends React.Component {
  render() {
    return <h3> Lets go for a <FaBeer />? </h3>
  }
}

export default function Main({ navigation }) {

  const [pills, setPills] = useState([
    { id: '1', name: 'Спазган', type: 'таблетка', dose: 1, unit: 'шт', timeToTake: '12:30', img: require('../assets/img/pill.png')},
    { id: '2', name: 'Хлоргексилин', type: 'процедура', dose: 1, unit: 'шт', timeToTake: '13:30', img: require('../assets/img/injection.png')},
    { id: '3', name: 'Левомицетин', type: 'капля', dose: 3, unit: 'мл', timeToTake: '22:30', img: require('../assets/img/drop.png')}
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
      <Text style={ styles.header }>
        <p style={ styles.chooseDay }>Сегодня</p>
        <p style={ styles.day }>{dayOfWeek}, 6 ноября</p>
      </Text>
      {/*в data прописываем с каким массивом работаем*/}
      <FlatList style={styles.items} data={pills} renderItem={({item}) => (
        <TouchableOpacity style={styles.item} onPress={()=> navigation.navigate('PillCard', item)}>
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
    </View>
  ); 
}

const styles = StyleSheet.create({
  header: {
    margin: 0,
    fontSize: 20,
    color: '#4B3367',
    lineHeight: 'normal',
    textAlign: 'left'
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
  }
  
});

