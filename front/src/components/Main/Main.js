import React from 'react'
import { View, Text } from 'react-native'
import TopBar from '../TopBar/TopBar'
import styles from '../../styles'


function Main() {
  return (
    <View>
      <TopBar style={styles.navbar} tabName={'Ecommerce Template'} />
      <Text>Main component</Text>
    </View>
  )
}

export default Main
