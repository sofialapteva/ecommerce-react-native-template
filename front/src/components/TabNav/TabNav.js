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
import { thunkGetUser } from '../../redux/store'
import CMS from '../CMS/CMS.js'
import EditItems from '../CMS/EditItems'
import AddItem from '../CMS/AddItem'
import Orders from '../CMS/Orders'

const Tab = createMaterialBottomTabNavigator();

const AccountStackNav = createStackNavigator();
const CMSNav = createStackNavigator();

function AccountStackNavScreen() {
  return (
    <AccountStackNav.Navigator headerStyle={{ height: 80, backgroundColor: '#ddbea9', }}>
      <AccountStackNav.Screen name='Аккаунт' component={Account} />
      <AccountStackNav.Screen name="Аутентификация" component={AuthForm} />
    </AccountStackNav.Navigator>
  );
}

function CMSNavScreen() {
  return (
    <CMSNav.Navigator headerStyle={{ height: 80, backgroundColor: '#ddbea9' }}>
      <CMSNav.Screen name='Настройки' component={CMS} />
      <CMSNav.Screen name="Товары" component={EditItems} />
      <CMSNav.Screen name="AddItem" component={AddItem} />
      <CMSNav.Screen name="Заказы" component={Orders} />
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
    if (store.userId) {
      dispatch(thunkGetUser(store.userId))
    }
  }, [])
  const itemsInCart = useSelector(({ cart }) => cart.length)
  return (
    <Tab.Navigator
      barStyle={{ backgroundColor: '#ddbea9' }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size = 24 }) => {
          let iconName;
          if (route.name === 'Главная') {
            iconName = 'home';
          } else if (route.name === 'Корзина') {
            iconName = 'shoppingcart';
          } else if (route.name === 'Аккаунт') {
            iconName = 'user';
          } else if (route.name === 'Меню') {
            iconName = focused ? 'menuunfold' : 'menufold';
          } else if (route.name === 'Настройки') {
            iconName = 'setting'
          }
          return <AntDesign name={iconName} size={size} color={color} />;
        },
      })}
      initialRouteName='Главная'
    >
      <Tab.Screen name='Меню' component={Menu} />
      <Tab.Screen name='Главная' component={Main} />
      {itemsInCart ? <Tab.Screen name='Корзина' component={Cart} options={{ tabBarBadge: itemsInCart }} /> : <Tab.Screen name='Корзина' component={Cart} />}
      <Tab.Screen name='Аккаунт' component={AccountStackNavScreen} />
      {store.userId == 'YALcicZ94ZVLDzPp4tgtGqSre7z1' ? (<Tab.Screen name='Настройки' component={CMSNavScreen} />) : (<></>)
      }
    </Tab.Navigator>
  );
}
