import React from 'react'
import { View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import styles from '../../styles'
import NavButton from '../commonComponents/NavButton'
function CMS({ navigation }) {
  // const [shouldUpdate, setShouldUpdate] = React.useState(true)
  return (
    <View>
      <NavButton style={styles.greenbutton} text='Main' onPress={() => navigation.navigate('Main')} />
      {/* <TextInput style={styles.input} placeholder='Your name' disabled={shouldUpdate} /> */}
    </View>
  )
}

export default CMS
