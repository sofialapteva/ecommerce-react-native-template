import React, { useState } from 'react'
import { View, TextInput, Text } from 'react-native'
import styles from '../../styles'
import NavButton from '../commonComponents/NavButton'
import { useSelector } from 'react-redux'
import { db } from '../../../firebase'
import { useDispatch } from 'react-redux'
import { thunkGetUser } from '../../redux/store'

function Account({ navigation }) {
  const [userName, setUserName] = useState('')
  const [userSurname, setUserSurname] = useState('')
  const [userCity, setUserCity] = useState('')
  const [userPhone, setUserPhone] = useState('')
  const [userStreet, setUserStreet] = useState('')
  const [userApartment, setUserApartment] = useState('')
  const store = useSelector(store => store)
  const dispatch = useDispatch()
  React.useEffect(() => {
    if (store.userId) {
      dispatch(thunkGetUser(store.userId))
    }
  }, [])
  React.useEffect(() => {
    if (store.userId) {
      dispatch(thunkGetUser(store.userId))
    }
  }, [store.userId])
  function saveInfoHandler() {
    if (store.userId) {
      db.collection('Users').doc(store.userId).set({
        name: userName,
        surname: userSurname,
        city: userCity,
        street: userStreet,
        apartment: userApartment,
        phone: userPhone,
      })
      navigation.navigate('Главная')
    } else {
      navigation.navigate('Аутентификация')
    }
  }

  return (
    <View>
      {store.userData.name ?
        <View>
          <Text style={styles.input}> Имя: {store.userData.name}</Text>
          <Text style={styles.input}>Фамилия: {store.userData.surname}</Text>
          <Text style={styles.largeText}>Адрес доставки:</Text>
          <Text style={styles.input}>Город: {store.userData.city}</Text>
          <Text style={styles.input}>Улица: {store.userData.street}</Text>
          <Text style={styles.input}>Дом:{store.userData.apartment}</Text>
          <Text style={styles.input}>Телефон:{store.userData.phone}</Text>
        </View> : <></>}
      {store.userId && !store.userData.name ?
        <View>
          <TextInput onChangeText={setUserName} style={styles.input} placeholder='Имя' />
          <TextInput onChangeText={setUserSurname} style={styles.input} placeholder='Фамилия' />
          <TextInput onChangeText={setUserCity} style={styles.input} placeholder='Город' />
          <TextInput onChangeText={setUserStreet} style={styles.input} placeholder='Улица' />
          <TextInput onChangeText={setUserApartment} style={styles.input} placeholder='Дом' />
          <TextInput onChangeText={setUserPhone} style={styles.input} placeholder='Телефон' />
          <NavButton style={styles.greenbutton}
            text='Сохранить' onPress={saveInfoHandler} />
        </View> : <></>}
      {store.userId ? <NavButton style={styles.redbutton} text='Выйти' onPress={() => navigation.navigate('Аутентификация')} /> : <NavButton style={styles.greenbutton} text='Аккаунт' onPress={() => navigation.navigate('Аутентификация')} />}
    </View>
  )
}

export default Account
