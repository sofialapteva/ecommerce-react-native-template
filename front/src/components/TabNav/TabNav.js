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
import DeleteItems from '../CMS/DeleteItems'
import Statistics from '../CMS/Statistics'
import AddItem from '../CMS/AddItem'

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

function CMSNavScreen() {
  return (
    <CMSNavScreen.Navigator headerStyle={{ height: 80, backgroundColor: 'blue' }}>
      <CMSNavScreen.Screen name="DeleteItems" component={DeleteItems} />
      <CMSNavScreen.Screen name="Statistics" component={Statistics} />
      <CMSNavScreen.Screen name="AddItem" component={AddItem} />
    </CMSNavScreen.Navigator>
  );
}

export default function TabNav() {
  const dispatch = useDispatch()
  const store = useSelector(store => store)
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
      {store.userId == 'Z37MWnBGmodW6wfdFnCxpYFK3Jl1' ? (<Tab.Screen name='CMS' component={CMS} />) : (<></>)
      }
    </Tab.Navigator>
  );
}
