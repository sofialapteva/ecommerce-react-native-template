import React, { useRef } from 'react'
import { View, TextInput } from 'react-native'
import styles from '../../styles'
import NavButton from '../commonComponents/NavButton'
import { useSelector } from 'react-redux'
import { db } from '../../../firebase'
function Account({ navigation }) {
  const store = useSelector(store => store)
  const userName = useRef('')
  const userSurname = useRef('')
  const userCity = useRef('')
  const userStreet = useRef('')
  const userApartment = useRef('')
  function saveInfoHandler() {
    db.collection('Users').doc(store.userId).set({
      name: userName.current.value,
      surname: userSurname.current.value,
      city: userCity.current.value,
      street: userStreet.current.value,
      apartment: userApartment.current.value,
    })
    navigation.navigate('Main')
  }

  return (
    <View>
      {store.userId ? <NavButton style={styles.redbutton} text='Logout' onPress={() => navigation.navigate('Auth')} /> : <NavButton style={styles.greenbutton} text='Login' onPress={() => navigation.navigate('Auth')} />}
      {store.userData === {} ?
        <View>
          <Text>{store.userData.name}</Text>
          <Text>{store.userData.surname}</Text>
          <Text>{store.userData.city}</Text>
          <Text>{store.userData.street}</Text>
          <Text>{store.userData.apartment}</Text>
        </View> :
        <View>
          <TextInput ref={userName} style={styles.input} placeholder='Name' />
          <TextInput ref={userSurname} style={styles.input} placeholder='Surname' />
          <TextInput ref={userCity} style={styles.input} placeholder='City' />
          <TextInput ref={userStreet} style={styles.input} placeholder='Street' />
          <TextInput ref={userApartment} style={styles.input} placeholder='Apartment' />
          <NavButton style={styles.greenbutton}
            text='Save information' onPress={saveInfoHandler} />
        </View>
      }
    </View>
  )
}

export default Account
