import React from 'react';
import { View } from 'react-native';
import TabNav from './src/components/TabNav/TabNav'
import styles from './src/styles'

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {

  return (
    <NavigationContainer>
      <View style={styles.appContainer}>
        <TabNav />
      </View>
    </NavigationContainer>
  );
}
