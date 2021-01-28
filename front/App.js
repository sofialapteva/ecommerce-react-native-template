import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TabNav from './src/components/TabNav/TabNav'
import styles from './src/styles'
import { enableScreens } from 'react-native-screens'
import 'react-native-gesture-handler';

enableScreens()

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()


export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.appContainer}>
        <TabNav />
      </View>
    </NavigationContainer>
  );
}


// <Stack.Navigator
//   screenOptions={{
//     headerTintColor: 'white',
//     headerStyle: { backgroundColor: 'blue' },
//   }}>
//   <Stack.Screen name='Main' component={Main} />
//   <Stack.Screen name='Menu' component={Menu} />
//   <Stack.Screen name='Cart' component={Cart} />
//   <Stack.Screen name='Account' component={Account} />
// </Stack.Navigator>
