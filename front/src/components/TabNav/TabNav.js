import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { AntDesign } from '@expo/vector-icons';
import { auth } from "../../../firebase";
import { useDispatch, useSelector } from 'react-redux'
import Cart from '../Cart/Cart'
import Menu from '../Menu/Menu'
import Main from '../Main/Main'
import Account from '../Account/Account'
import AuthForm from '../AuthForm/AuthForm'

import CMS from '../CMS/CMS.js'
import EditItems from '../CMS/EditItems'
import Statistics from '../CMS/Statistics'
import AddItem from '../CMS/AddItem'
import Orders from '../CMS/Orders'

const Tab = createMaterialBottomTabNavigator();

const AccountStackNav = createStackNavigator();
const CMSNav = createStackNavigator();

function AccountStackNavScreen() {
  return (
    <AccountStackNav.Navigator headerStyle={{ height: 80, backgroundColor: 'blue' }}>
      <AccountStackNav.Screen name="Account" component={Account} />
      <AccountStackNav.Screen name="Auth" component={AuthForm} />
    </AccountStackNav.Navigator>
  );
}

function CMSNavScreen() {
  return (
    <CMSNav.Navigator headerStyle={{ height: 80, backgroundColor: 'blue' }}>
      <CMSNav.Screen name="CMS" component={CMS} />
      <CMSNav.Screen name="EditItems" component={EditItems} />
      <CMSNav.Screen name="Statistics" component={Statistics} />
      <CMSNav.Screen name="AddItem" component={AddItem} />
      <CMSNav.Screen name="Orders" component={Orders} />
    </CMSNav.Navigator>
  );
}

export default function TabNav() {
  const dispatch = useDispatch()
  const store = useSelector(store => store)
  React.useEffect(() => {
    auth.onAuthStateChanged(async user => {
      if (user?.uid) {
        dispatch({ type: "AUTH", payload: user.uid })
      } else {
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
        } else if (route.name === 'CMS') {
          iconName = focused ? 'menufold' : 'menuunfold';
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
      {store.userId == 'YALcicZ94ZVLDzPp4tgtGqSre7z1' ? (<Tab.Screen name='CMS' component={CMSNavScreen} />) : (<></>)
      }
    </Tab.Navigator>
  );
}
