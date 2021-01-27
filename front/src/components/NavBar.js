import React from 'react'
import { View, Text } from 'react-native'
import styles from '../styles'

function NavBar({ changeState, links }) {
  return (
    <View style={styles.navbar}>
      {links.map((el, index) => (
        <Text key={`nav_${index}`} onPress={() => changeState(el)} style={styles.text} >{el}</Text>))}
    </View>
  )
}

export default NavBar
