import React from 'react'
import { View, Text } from 'react-native'
function ItemOnMain({ id, oldPrice, price, tags, productName }) {
  return (
    <View>
      <Text>{productName}</Text>
      <Text>{id}</Text>
      <Text>{oldPrice}</Text>
      <Text>{price}</Text>
    </View>
  )
}

export default ItemOnMain
