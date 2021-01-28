import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from '../../styles'
function NavButton({ text, onPress, style }) {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}
      style={style} >
      <Text style={styles.label}>{text}</Text>
    </TouchableOpacity>)
}

export default NavButton
