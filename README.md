# medtrack
Приложение для отслеживания принятия лекарств на React Native

![Screenshot_72](https://github.com/EmmaMaltseva/medtrack/assets/92587254/bff983d7-ebbd-45ce-aa40-e41097618e4d)
https://www.figma.com/file/o5lXpxf7zazWb2czW7pSMG/MedTrack?type=design&node-id=0-1&mode=design&t=SPMKRLE02ASFwUrL-0
# 1 спринт
1. Изучение предметной области - Комаров, Мальцева ✓
2. Установка и анализ приложений конкурентов - Комаров, Мальцева ✓
3. Возможности выхода на рынок - Комаров, Мальцева ✓
4. Создание репозитория на GitHub - Мальцева ✓
5. Выбор инструментальных средств разработки - Комаров, Мальцева ✓
# 2 спринт
1. Создание инфологической модели данных - Комаров ✓
2. Разработка макета - Мальцева ✓
3. Создание таблиц в СУБД - Комаров ✓
# 3 спринт
1. Загрузка структуры проекта React, изучение структуры - Мальцева, Комаров ✓
2. Выделить основные компоненты проекта - Комаров, Мальцева ✓
3. Кнопка для добавления лекарства на текущий день - Мальцева ✓
4. Форма для информации о лекарстве (категория лекарства, название, во сколько, сколько в день, как долго пить) - Мальцева ✓
5. Функция на обработку введенного лекарства и добавление в БД - Комаров (добавление данных  в БД) - Комаров ✓
6. Добавления календаря - Мальцева
7. Выбор даты - Мальцева
8. SQL запрос на вывод лекарств с выбраннойс датой - Комаров ✓
# 4 спринт
1. Изучить добавление уведомлений - Комаров ✓
2. Добавить Уведомления - Комаров

# Класс создания, получения, обновления и удаления пользователя
class UserController{

    //Создание юзера
    async createUser(req,res) {
        const {name, surname, email, password, login} = req.body
        const newPerson = await db.query(`INSERT INTO users (name, surname, email, password, login) values ($1, $2, $3, $4, $5) RETURNING *`, [name, surname, email, password, login])
        console.log(name, surname, email, password, login)
        res.json(newPerson.rows[0])
    }

    //Получить всех
    async getUsers(req,res) {
        const users = await db.query('SELECT * FROM users')
        res.json(users.rows)
    }

    // Получить одного юзера
    async getOneUser(req,res) {
        const id = req.params.id
        const user = await db.query('SELECT * FROM users where id = $1', [id])
        res.json(user.rows[0])
    }

    // Обновить юзера
    async updateUser(req,res) {
        const {id, name, surname, email, password, login} = req.body
        const user = await db.query('UPDATE users set name = $1, surname = $2, email = $3, password = $4, login = $5 where id = $6 RETURNING *',
            [name, surname, email, password, login, id]
        )
        res.json(user.rows[0])
    }

    //Удалить юзера
    async deleteUser(req,res) {
        const id = req.params.id
        const user = await db.query('DELETE FROM users where id = $1', [id])
        res.json(user.rows[0])
    }

}

#Компонент Карточки лекарства, принимает route для переключения между экранами

export default function PillCard({ route }) {

  return (
    <View style={gStyle.main}>
      <Image style={ styles.img } source={route.params.img}/>
      <Text style={gStyle.title}>{route.params.name}</Text>
      <Text style={gStyle.title}>{route.params.type}</Text>
      <Text style={gStyle.title}>{route.params.timeToTake}</Text>
    </View>
  );
}

#Компонент формы добавления лекарства. Принимает функцию AddPill для загрузки добавленного лекарства в массив

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
