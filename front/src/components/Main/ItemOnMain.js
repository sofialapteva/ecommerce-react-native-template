import React from 'react'
import { View, Text, Image } from 'react-native'
import tailwind from 'tailwind-rn'
import Entypo from 'react-native-vector-icons/Entypo'
import { useDispatch } from 'react-redux'
import styles, { stylesTailwind } from '../../styles'
function ItemOnMain({ id, oldPrice, price, tags, productName, uri }) {
  const dispatch = useDispatch()
  return (
    <View
      style={styles.itemOnMain}>
      <View>
        <Image source={{ uri: uri }} style={tailwind(stylesTailwind.img)} />
      </View>
      <View style={tailwind(stylesTailwind.label)}>
        <Text style={tailwind('text-sm font-bold')}>{productName}</Text>
      </View>
      <View style={tailwind('flex justify-around py-10')}>
        {oldPrice > price ? <Text style={tailwind('text-sm line-through')}>{oldPrice}</Text> : <></>}
        <Text style={tailwind('text-sm font-bold')}>{price}</Text>
      </View>
      <Entypo name="shopping-cart" size={24} color="gray" style={tailwind('p-2 self-center')} onPress={() => dispatch({ type: "ADD_TO_CART", payload: id })} />
    </View>
  )
}


export default ItemOnMain

