import React from 'react'
import { View } from 'react-native'
import styles from '../../styles'
import NavButton from '../commonComponents/NavButton'
function CMS({ navigation }) {
  return (
    <View style={styles.buttonBlock}>
      <NavButton style={styles.greenbutton} text='Add item' onPress={() => navigation.navigate('AddItem')} />
      <NavButton style={styles.greenbutton} text='Edit items' onPress={() => navigation.navigate('DeleteItems')} />
      <NavButton style={styles.greenbutton} text='Statistics' onPress={() => navigation.navigate('Statistics')} />
    </View>
  )
}

export default CMS
