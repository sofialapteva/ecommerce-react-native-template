import React from 'react'
import { View } from 'react-native'
import styles from '../../styles'
import NavButton from '../commonComponents/NavButton'
function CMS({ navigation }) {
  return (
    <View>
      <NavButton style={styles.greenbutton} text='Statistics' onPress={() => navigation.navigate('Statistics')} />
      <NavButton style={styles.greenbutton} text='DeleteItems' onPress={() => navigation.navigate('DeleteItems')} />
      <NavButton style={styles.greenbutton} text='AddItem' onPress={() => navigation.navigate('AddItem')} />
    </View>
  )
}

export default CMS
