import React from 'react';
import 'react-native-gesture-handler';

import { View } from 'react-native';
import { enableScreens } from 'react-native-screens'
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux'
import { store } from './src/redux/store'

import TabNav from './src/components/TabNav/TabNav'
import styles from './src/styles'

enableScreens()
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <View style={styles.appContainer}>
          <TabNav />
        </View>
      </NavigationContainer>
    </Provider>
  );
}
