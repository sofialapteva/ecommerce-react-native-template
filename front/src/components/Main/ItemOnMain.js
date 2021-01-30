import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from '../../styles'
import tailwind from 'tailwind-rn'
import Entypo from 'react-native-vector-icons/Entypo'
function ItemOnMain({ id, oldPrice, price, tags, productName, uri, addItemToCart }) {
  return (
    <View style={tailwind('h-32 border-2 border-gray-200 flex-row flex justify-between')}>
      <View>
        <Image source={uri} style={tailwind('h-28 w-28 m-2 bg-gray-200')} />
      </View>
      <View style={tailwind('flex justify-around py-10 text-left w-5/12')}>
        <Text style={tailwind('text-sm font-bold')}>{productName}</Text>
      </View>
      <View style={tailwind('flex justify-around py-10')}>
        <Text style={tailwind('text-sm line-through')}>{oldPrice}</Text>
        <Text style={tailwind('text-sm font-bold')}>{price}</Text>
      </View>
      <Entypo name="shopping-cart" size={24} color="gray" style={tailwind('p-2 self-center')} onPress={() => addItemToCart(id)} />
    </View>
  )
}


export default ItemOnMain

