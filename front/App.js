import React from 'react';
import { View } from 'react-native';
import NavBar from './src/components/NavBar'
import Main from './src/components/Main'
import Menu from './src/components/Menu/Menu'
import Cart from './src/components/Cart'
import styles from './src/styles'


export default function App() {
  const [component, setComponent] = React.useState('Cart')
  const links = ['Menu', 'Main', 'Cart']

  const changeState = (name) => {
    switch (name) {
      case 'Main':
        setComponent('Main')
        break;
      case 'Cart':
        setComponent('Cart')
        break;
      case 'Menu':
        setComponent('Menu')
        break;
      default:
        break;
    }
  }

  return (
    <View style={styles.appContainer}>
      <NavBar style={styles.navbar} changeState={changeState} links={links} />
      {component === 'Cart' ? <Cart /> : <></>}
      {component === 'Main' ? <Main /> : <></>}
      {component === 'Menu' ? <Menu /> : <></>}
    </View>
  );
}
