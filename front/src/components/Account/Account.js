import React from 'react'
import { View, Text, Button } from 'react-native'
import TopBar from '../TopBar/TopBar'
import styles from '../../styles'
function Account({ navigation }) {
  return (
    <View>
      <TopBar style={styles.navbar} tabName={'Account'} />
      <Button title='Main' onPress={() => navigation.navigate('Main')} />
      <Button title='Menu' onPress={() => navigation.navigate('Menu')} />
      <Button title='Cart' onPress={() => navigation.navigate('Cart')} />
      <Text>Main component</Text>
    </View >
  )
}

export default Account
