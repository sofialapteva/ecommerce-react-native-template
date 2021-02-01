import React from 'react'
import { View } from 'react-native'
import styles from '../../styles'
import NavButton from '../commonComponents/NavButton'
function CMS({ navigation }) {
  return (
    <View>
      <View style={styles.buttonBlock}>
        <NavButton style={styles.greenbutton} text='Add item' onPress={() => navigation.navigate('AddItem')} />
        <NavButton style={styles.greenbutton} text='Edit items' onPress={() =>
          navigation.navigate('EditItems')} />
      </View>
      <View style={styles.buttonBlock}>
        <NavButton style={styles.greenbutton} text='Statistics' onPress={() => navigation.navigate('Statistics')} />
        <NavButton style={styles.greenbutton} text='Orders' onPress={() => navigation.navigate('Orders')} />
      </View>
    </View>
  )
}

export default CMS
