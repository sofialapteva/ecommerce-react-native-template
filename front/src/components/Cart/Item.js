import React from 'react'
import { View, Text, Image } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import styles from '../../styles'

function Item({ item, removeItem }) {
  return (
    <View style={styles.itemInCart}>
      <Image source={{ uri: item.uri }} style={styles.cartImg} />
      <View>
        <Text style={styles.largeText}>{item.productName}</Text>
        <Text>ID: {item.productId}</Text>
      </View>
      <View>
        <Text style={styles.crossedText}>{item.price}</Text>
        <Text style={styles.largeText}>{item.priceDiscount}</Text>
      </View>
      <Entypo name="circle-with-cross" size={24} color="gray" style={styles.iconCross} onPress={() => removeItem(item.productId)} />
    </View>
  )
}

export default Item
