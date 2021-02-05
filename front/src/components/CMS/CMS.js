import React from 'react'
import { View } from 'react-native'
import styles from '../../styles'
import NavButton from '../commonComponents/NavButton'
function CMS({ navigation }) {
  return (
    <View>
      <View style={styles.buttonBlock}>
        <NavButton style={styles.greenbutton} text='Новый товар' onPress={() => navigation.navigate('AddItem')} />
        <NavButton style={styles.greenbutton} text='Товары' onPress={() =>
          navigation.navigate('Товары')} />
        <NavButton style={styles.greenbutton} text='Заказы' onPress={() => navigation.navigate('Заказы')} />
      </View>
    </View>
  )
}

export default CMS
