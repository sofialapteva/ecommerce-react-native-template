import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TabNav from './src/components/TabNav/TabNav'
import styles from './src/styles'
import { enableScreens } from 'react-native-screens'
import 'react-native-gesture-handler';
import { createStore } from 'redux'
import { store } from './src/redux/store'
import { Provider } from 'react-redux'
enableScreens()
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
// import  store  from './src/redux/store';
const Stack = createStackNavigator()
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


{/* <Stack.Navigator React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TabNav from './src/components/TabNav/TabNav'
import styles from './src/styles'
import { enableScreens } from 'react-native-screens'
import 'react-native-gesture-handler';
import {createStore} from 'redux'
import {store} from './src/redux/store'
import {Provider} from 'react-redux'
enableScreens()
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
// import  store  from './src/redux/store';
const Stack = createStackNavigator()
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

const Stack = createStackNavigator()
</Stack.Navigator
screenOptions={{
  headerTintColor: 'white',
  headerStyle: { backgroundColor: 'blue' },
}}>
<Stack.Screen name='Main' component={Main} />
<Stack.Screen name='Menu' component={Menu} />
<Stack.Screen name='Cart' component={Cart} />
<Stack.Screen name='Account' component={Account} />
<Stack.Screen name='AuthForm' component={AuthForm} />
</Stack.Navigator> */}




{/* <View style={styles.appContainer}>
        <TabNav />
      </View> */}
