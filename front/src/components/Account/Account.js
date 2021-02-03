import React, { useRef } from 'react'
import { View, TextInput, Text } from 'react-native'
import styles from '../../styles'
import NavButton from '../commonComponents/NavButton'
import { useSelector } from 'react-redux'
import { db } from '../../../firebase'
import { useDispatch } from 'react-redux'
import { thunkGetUser } from '../../redux/store'

function Account({ navigation }) {
  const store = useSelector(store => store)
  const dispatch = useDispatch()
  const userName = useRef('')
  const userSurname = useRef('')
  const userCity = useRef('')
  const userStreet = useRef('')
  const userApartment = useRef('')
  React.useEffect(() => {
    if (store.userId) {
      dispatch(thunkGetUser(store.userId))
    }
  }, [store.userData])

  function saveInfoHandler() {
    if (store.userId) {
      db.collection('Users').doc(store.userId).set({
        name: userName.current.value,
        surname: userSurname.current.value,
        city: userCity.current.value,
        street: userStreet.current.value,
        apartment: userApartment.current.value,
      })
      navigation.navigate('Main')
    } else {
      navigation.navigate('Auth')
    }
  }

  return (
    <View>
      {store.userData.name ?
        <View>
          <Text style={styles.input}>Your name: {store.userData.name}</Text>
          <Text style={styles.input}>Your surname: {store.userData.surname}</Text>
          <Text style={styles.input}>Address of delivery:</Text>
          <Text style={styles.input}>Your city: {store.userData.city}</Text>
          <Text style={styles.input}>Your street: {store.userData.street}</Text>
          <Text style={styles.input}>Your apartment:{store.userData.apartment}</Text>
        </View> : <></>}
      {store.userId && !store.userData.name ?
        <View>
          <TextInput ref={userName} style={styles.input} placeholder='Name' required />
          <TextInput ref={userSurname} style={styles.input} placeholder='Surname' required />
          <TextInput ref={userCity} style={styles.input} placeholder='City' required />
          <TextInput ref={userStreet} style={styles.input} placeholder='Street' required />
          <TextInput ref={userApartment} style={styles.input} placeholder='Apartment' required />
          <NavButton style={styles.greenbutton}
            text='Save' onPress={saveInfoHandler} />
        </View> : <></>}
      {store.userId ? <NavButton style={styles.redbutton} text='Logout' onPress={() => navigation.navigate('Auth')} /> : <NavButton style={styles.greenbutton} text='Login' onPress={() => navigation.navigate('Auth')} />}
    </View>
  )
}

export default Account
