import React from 'react'
import { View, Text, TextInput, Alert } from 'react-native'
import NavButton from '../commonComponents/NavButton'
import tailwind from 'tailwind-rn'
import { db } from '../../../firebase'
import styles from '../../styles'
import { useDispatch } from 'react-redux'
import { thunkGetItems } from '../../redux/store'

function OrderDetails({ id, user, items }) {
  const sum = items?.reduce((acc, el) => +acc + +el.price, 0)
  return (
    <View style={tailwind('border-2 flex flex-col text-xl m-2')}>
      <View>
        <Text style={styles.largeText}>User: {user}</Text>
      </View>
      {items?.map((el, index) => (
        <View key={index}>
          <Text>Name: {el.productName}</Text>
          <Text>ID: {el.id}</Text>
          <Text>Price: {el.price}</Text>
        </View>
      ))}
      <Text>Sum: {sum}</Text>
    </View>
  )
}

export default OrderDetails
