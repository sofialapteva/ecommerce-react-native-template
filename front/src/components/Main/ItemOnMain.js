import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from '../../styles'

function ItemOnMain({ id, oldPrice, price, tags, productName, uri }) {
  return (
    <View style={styles.itemInCart}>
      <Image source={uri} style={styles.cartImg} />
      <View style={{ flexDirection: 'column' }}>
        <Text style={styles.largeText}>{productName}</Text>
        <Text>ID: {id}</Text>
      </View>
      <View>
        <Text style={styles.crossedText}>{oldPrice}</Text>
        <Text style={styles.largeText}>{price}</Text>
      </View>
    </View>
  )
}


export default ItemOnMain

