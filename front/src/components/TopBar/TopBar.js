import React from 'react'
import { View, Text } from 'react-native'
import styles from '../../styles'


function TopBar({ tabName }) {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>{tabName}</Text>
    </View>
  )
}

export default TopBar
