import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AuthForm from './components/authForm';
import TabNav from './src/components/TabNav/TabNav'
import styles from './src/styles'
import { enableScreens } from 'react-native-screens'
import 'react-native-gesture-handler';

enableScreens()

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import Main from './src/components/Main/Main';
import Menu from './src/components/Menu/Menu';
import Cart from './src/components/Cart/Cart';
import Account from './src/components/Account/Account';

const Stack = createStackNavigator()


export default function App() {

  return (
    <View style={styles.container}>
      <Text>Hello!</Text>
     <AuthForm />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


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
