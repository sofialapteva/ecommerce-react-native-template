import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { AntDesign } from '@expo/vector-icons';

import Cart from '../Cart/Cart'
import Menu from '../Menu/Menu'
import Main from '../Main/Main'
import Account from '../Account/Account'
import AuthForm from '../AuthForm/AuthForm'


const Tab = createBottomTabNavigator();

const AccountStackNav = createStackNavigator();

function AccountStackNavScreen() {
  return (
    <AccountStackNav.Navigator headerStyle={{ height: 80, backgroundColor: 'blue' }}>
      <AccountStackNav.Screen name="Account" component={Account} />
      <AccountStackNav.Screen name="Auth" component={AuthForm} />
    </AccountStackNav.Navigator >
  );
}

export default function Some() {

  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size = 24 }) => {
        let iconName;
        if (route.name === 'Main') {
          iconName = 'home';
        } else if (route.name === 'Cart') {
          iconName = 'shoppingcart';
        } else if (route.name === 'Account') {
          iconName = 'user';
        } else if (route.name === 'Menu') {
          iconName = focused ? 'menufold' : 'menuunfold';
        }
        return <AntDesign name={iconName} size={size} color={color} />;
      },
    })}

      tabBarOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Main" component={Main} />
      <Tab.Screen name="Account" component={AccountStackNavScreen} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Menu" component={Menu} />
    </Tab.Navigator>
  );
}
