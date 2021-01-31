import React from 'react'
import { View } from 'react-native'
import styles from '../../styles'
import NavButton from '../commonComponents/NavButton'
function Account({ navigation }) {
  // const [shouldUpdate, setShouldUpdate] = React.useState(true)
  return (
    <View>
      <NavButton style={styles.greenbutton} text='Login' onPress={() => navigation.navigate('Auth')} />
      {/* <TextInput style={styles.input} placeholder='Your name' disabled={shouldUpdate} /> */}
    </View>
  )
}

export default Account
