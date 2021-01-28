import React from 'react'
import { View, Text, Image, FlatList } from 'react-native'
import Item from './Item'
import styles from '../../styles'
import NavButton from '../commonComponents/NavButton'
import TopBar from '../TopBar/TopBar'

function Cart() {
  const itemsInCart = [{
    uri: 'https://reactnative.dev/img/tiny_logo.png',
    productName: 'React crash course',
    productId: '1Y23d45s61',
    price: '100$',
    priceDiscount: '50$',
  },
  {
    uri: 'https://reactnative.dev/img/tiny_logo.png',
    productName: 'React crash course',
    productId: '1Y23d45s62',
    price: '100$',
    priceDiscount: '50$',
  },
  {
    uri: 'https://reactnative.dev/img/tiny_logo.png',
    productName: 'React crash course',
    productId: '1Y23d45s63',
    price: '100$',
    priceDiscount: '50$',
  },
  {
    uri: 'https://reactnative.dev/img/tiny_logo.png',
    productName: 'React crash course',
    productId: '1Y23d45s64',
    price: '100$',
    priceDiscount: '50$',
  },
  {
    uri: 'https://reactnative.dev/img/tiny_logo.png',
    productName: 'React crash course',
    productId: '1Y23d45s65',
    price: '100$',
    priceDiscount: '50$',
  },
  {
    uri: 'https://reactnative.dev/img/tiny_logo.png',
    productName: 'React crash course',
    productId: '1Y23d45s66',
    price: '100$',
    priceDiscount: '50$',
  },
  {
    uri: 'https://reactnative.dev/img/tiny_logo.png',
    productName: 'React crash course',
    productId: '1Y23d45s67',
    price: '100$',
    priceDiscount: '50$',
  },]

  const renderItem = ({ item }) => (<Item item={item} removeItem={removeItem} />)
  const [items, setItems] = React.useState(itemsInCart);
  const [placeholder, setPlaceholder] = React.useState(null);

  const removeItem = (productId) => {
    const filteredItems = items.filter(el => el.productId !== productId);
    setItems(filteredItems)
  }
  const clearCart = () => {
    setItems([])
  }
  React.useEffect(() => {
    if (items.length === 0) {
      setPlaceholder(<View>
        <Text style={styles.largeText}>The cart is empty</Text>
        <Image source={require('./empty-cart.svg')} style={styles.emptyCartImage} />
      </View>
      )
    }
  }, [items])
  return (
    <View style={styles.cart}>
      <TopBar style={styles.navbar} tabName={'Cart'} />
      {placeholder}
      <FlatList style={styles.listOfItemsInCard} data={items} renderItem={renderItem} keyExtractor={item => item.productId} />
      <View style={styles.buttonBlock}>
        <NavButton text='Clear' style={styles.grayBtn} onPress={clearCart} />
        <NavButton text='Order' style={styles.greenBtn} />
      </View>
    </View>
  )
}


export default Cart
