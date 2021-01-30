import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { AntDesign } from '@expo/vector-icons';
import { useSelector } from 'react-redux'
import { auth } from "../../../firebase";
import { useDispatch } from 'react-redux'
import Cart from '../Cart/Cart'
import Menu from '../Menu/Menu'
import Main from '../Main/Main'
import Account from '../Account/Account'
import AuthForm from '../AuthForm/AuthForm'


const Tab = createMaterialBottomTabNavigator();

const AccountStackNav = createStackNavigator();

function AccountStackNavScreen() {
  return (
    <AccountStackNav.Navigator headerStyle={{ height: 80, backgroundColor: 'blue' }}>
      <AccountStackNav.Screen name="Account" component={Account} />
      <AccountStackNav.Screen name="Auth" component={AuthForm} />
    </AccountStackNav.Navigator>
  );
}

export default function TabNav() {
  const dispatch = useDispatch()
  React.useEffect(() => {
    auth.onAuthStateChanged(async user => {
      if (user?.uid) {
        console.log(user)
        dispatch({ type: "AUTH", payload: user.uid })
      } else {
        console.log(user)
        dispatch({ type: "AUTH", payload: '' })
      }
    })
  }, [])
  const itemsInCart = useSelector(({ cart }) => cart.length)
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
          iconName = focused ? 'menuunfold' : 'menufold';
        }
        return <AntDesign name={iconName} size={size} color={color} />;
      },
    })}
      initialRouteName="Main"
    >
      <Tab.Screen name="Menu" component={Menu} />
      <Tab.Screen name="Main" component={Main} />
      <Tab.Screen name="Account" component={AccountStackNavScreen} />
      {itemsInCart ? <Tab.Screen name="Cart" component={Cart} options={{ tabBarBadge: itemsInCart }} /> : <Tab.Screen name="Cart" component={Cart} />}

    </Tab.Navigator>
  );
}
