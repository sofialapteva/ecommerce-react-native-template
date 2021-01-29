import React from 'react'
import { View, Text, Image, FlatList, Alert } from 'react-native'
import { db } from '../../../firebase'

import Item from './Item'
import NavButton from '../commonComponents/NavButton'
import TopBar from '../TopBar/TopBar'

import styles from '../../styles'

function Cart() {
  const [items, setItems] = React.useState([]);
  const [placeholder, setPlaceholder] = React.useState(null);
  const renderItem = ({ item }) => (<Item item={item} removeItem={removeItem} />)

  const fetchCart = async () => {
    const cart = await db.collection('Carts').doc('penNAqCD0t2hZkcbMlJc').get();
    console.log(cart.data())
    const snapshot = await cart.data().Items;
    console.log(snapshot)
    let arr = []
    snapshot.forEach(doc => {
      arr.push({
        productId: doc.productId,
        uri: doc.uri,
        productName: doc.productName,
        oldPrice: doc.oldPrice,
        price: doc.price,
      })
    });
    setItems(arr)
  }

  React.useEffect(() => {
    fetchCart()
  }, [])

  React.useEffect(() => {
    if (items.length === 0) {
      setPlaceholder(<View>
        <Text style={styles.largeText}>Add items to the cart</Text>
        <Image source={require('./empty-cart.svg')} style={styles.emptyCartImage} />
      </View>
      )
    } else {
      setPlaceholder(null)
    }
  }, [items])

  const removeItem = (productId) => {
    const filteredItems = items.filter(el => el.productId !== productId);
    setItems(filteredItems)
  }

  const saveOrder = async () => {
    if (items.length > 0) {
      Alert.alert('Make an order', 'Confirm you want to order this items?', [{
        text: 'No'
      },
      {
        text: 'Yes',
        onPress: () => {
          db.collection("Orders").add({ Items: items, user: 'BMA56Q9OO3EFAt683WOb' })
          db.collection('Carts').doc('penNAqCD0t2hZkcbMlJc').delete()
          setItems([])
        }
      }])
    }
  }

  return (
    <View style={styles.cart}>
      <TopBar style={styles.navbar} tabName={'Cart'} />
      {placeholder}
      <FlatList style={styles.listOfItemsInCard} data={items} renderItem={renderItem} keyExtractor={item => item.productId} />
      <View style={styles.buttonBlock}>
        <NavButton text='Clear' style={styles.grayBtn} onPress={() => setItems([])} />
        <NavButton text='Order' style={styles.greenBtn} onPress={saveOrder} />
      </View>
    </View>
  )
}


export default Cart


// const itemsInCart = [{
//   uri: 'https://reactnative.dev/img/tiny_logo.png',
//   productName: 'React crash course',
//   productId: '1Y23d45s61',
//   oldPrice: '100$',
//   price: '50$',
// },
// {
//   uri: 'https://reactnative.dev/img/tiny_logo.png',
//   productName: 'React crash course',
//   productId: '1Y23d45s62',
//   oldPrice: '100$',
//   price: '50$',
// },
// {
//   uri: 'https://reactnative.dev/img/tiny_logo.png',
//   productName: 'React crash course',
//   productId: '1Y23d45s63',
//   oldPrice: '100$',
//   price: '50$',
// },
// {
//   uri: 'https://reactnative.dev/img/tiny_logo.png',
//   productName: 'React crash course',
//   productId: '1Y23d45s64',
//   oldPrice: '100$',
//   price: '50$',
// },
// {
//   uri: 'https://reactnative.dev/img/tiny_logo.png',
//   productName: 'React crash course',
//   productId: '1Y23d45s65',
//   oldPrice: '100$',
//   price: '50$',
// },
// {
//   uri: 'https://reactnative.dev/img/tiny_logo.png',
//   productName: 'React crash course',
//   productId: '1Y23d45s66',
//   oldPrice: '100$',
//   price: '50$',
// },
// {
//   uri: 'https://reactnative.dev/img/tiny_logo.png',
//   productName: 'React crash course',
//   productId: '1Y23d45s67',
//   oldPrice: '100$',
//   price: '50$',
// },]
