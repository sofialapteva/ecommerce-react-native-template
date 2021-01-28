import React from 'react'
import { View, Text, Button } from 'react-native'
import TopBar from '../TopBar/TopBar'
import styles from '../../styles'
import { createStackNavigator } from '@react-navigation/stack'

function Main({ navigation }) {
  return (
    <View>
      <TopBar style={styles.navbar} tabName={'Ecommerce Template'} />
      <Button title='Account' onPress={() => navigation.navigate('Account')} />
      <Button title='Menu' onPress={() => navigation.navigate('Menu')} />
      <Button title='Cart' onPress={() => navigation.navigate('Cart')} />
      <Text>Main component</Text>
    </View >
  )
}

export default Main
