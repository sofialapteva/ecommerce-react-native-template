import React from 'react'
import { View, Text, Button } from 'react-native'
import styles from '../../styles'
import NavButton from '../commonComponents/NavButton'
function Account({ navigation }) {
  return (
    <View>
      <NavButton style={styles.greenbutton} text='Login' onPress={() => navigation.navigate('Auth')} />
    </View>
  )
}

export default Account
