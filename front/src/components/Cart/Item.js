import React from 'react'
import { View, Text, Image } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import tailwind from 'tailwind-rn'

function Item({ item, removeItem }) {
  return (
    <View style={tailwind('h-32 border-2 border-gray-200 flex-row flex justify-between')}>
      <Image source={{ uri: item.uri }} style={tailwind('h-28 w-28 m-2 bg-gray-200')} />
      <View style={tailwind('flex justify-around py-10 text-left w-5/12')}>
        <Text style={tailwind('text-sm font-bold')}>{item.productName}</Text>
      </View>
      <View style={tailwind('flex justify-around py-10')}>
        <Text style={tailwind('text-sm line-through')}>{item.oldPrice}</Text>
        <Text style={tailwind('text-sm font-bold')}>{item.price}</Text>
      </View>
      <Entypo name="circle-with-cross" size={24} color="gray" style={tailwind('p-2')} onPress={() => removeItem(item.id)} />
    </View>
  )
}

export default Item
