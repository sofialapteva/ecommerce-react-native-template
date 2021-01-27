import React from 'react'
import { View, Text } from 'react-native'
import TopBar from '../TopBar/TopBar'
function Account() {
  return (
    <View>
      <TopBar tabName={Account} />
      <Text>This is account</Text>
    </View>
  )
}

export default Account
