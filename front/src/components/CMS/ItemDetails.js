import React from 'react'
import { View, Text, TextInput, Alert } from 'react-native'
import NavButton from '../commonComponents/NavButton'
import tailwind from 'tailwind-rn'
import { db } from '../../../firebase'
import styles from '../../styles'
import { useDispatch } from 'react-redux'
import { thunkGetItems } from '../../redux/store'

function ItemDetails({ productName, oldPrice, price, uri, id, tags, deleteHandler }) {
  const dispatch = useDispatch()
  const [nameState, setNameState] = React.useState(productName)
  const [priceState, setPriceState] = React.useState(price)
  const [oldPriceState, setOldPriceState] = React.useState(oldPrice)
  const [uriState, setUriState] = React.useState(uri)
  const [tagsState, setTagsState] = React.useState(tags.join())

  function saveHandler() {
    db.collection("Items").doc(id).set({
      productName: nameState,
      price: priceState,
      oldPrice: oldPriceState,
      uri: uriState,
      tags: tagsState.trim().split(' ').filter(el => el !== '' && el !== ' ')
    })
    dispatch(thunkGetItems())
  }

  return (
    <View style={tailwind('border-2 flex flex-col text-xl m-2')}>
      <View>
        <Text style={styles.largeText}>Name:</Text>
        <TextInput onChangeText={setNameState} style={styles.input} value={nameState} />
      </View>
      <View>
        <Text style={styles.largeText}>Old price:</Text>
        <TextInput onChangeText={setOldPriceState} style={styles.input} value={oldPriceState} />
      </View>
      <View>
        <Text style={styles.largeText}>Current price:</Text>
        <TextInput onChangeText={setPriceState} style={styles.input} value={priceState} />
      </View>
      <View>
        <Text style={styles.largeText}>Product image:</Text>
        <TextInput onChangeText={setUriState} style={styles.input} value={uriState} />
      </View>
      <View>
        <Text style={styles.largeText}>Tags:</Text>
        <TextInput onChangeText={setTagsState} style={styles.input} value={tagsState} />
      </View>
      <View style={styles.buttonBlock}>
        <NavButton text='Save' style={styles.greenbutton} onPress={() => saveHandler()} />
        <NavButton text='Delete' style={styles.redbutton} onPress={() => deleteHandler(id)} />
      </View>
    </View>
  )
}

export default ItemDetails
