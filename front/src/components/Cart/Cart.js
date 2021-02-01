import React from 'react'
import { View, Text, Image, FlatList, Alert } from 'react-native'
import { db } from '../../../firebase'
import { useSelector, useDispatch } from 'react-redux'
import Item from './Item'
import NavButton from '../commonComponents/NavButton'
import TopBar from '../TopBar/TopBar'
import styles from '../../styles'
function Cart({ navigation }) {
  const [items, setItems] = React.useState([]);
  const store = useSelector(store => store)
  const dispatch = useDispatch()
  const [placeholder, setPlaceholder] = React.useState(null);
  const renderItem = ({ item }) => (<Item item={item} removeItem={removeItem} />)
  async function fetchCart() {
    if (store.cart.length) {
      let itemsArr = []
      store.cart.forEach(async id => {
        const rawItem = await db.collection('Items').doc(id).get();
        const doc = await rawItem.data()
        await itemsArr.push({
          id: id,
          uri: doc.uri,
          productName: doc.productName,
          oldPrice: doc.oldPrice,
          price: doc.price,
        })
        await setItems(itemsArr)
      });
    }
  }
  React.useEffect(() => {
    console.log(store)
    fetchCart()
  }, [store.cart])
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
  function clearCart() {
    setItems([]);
    dispatch({ type: 'CLEAR_CART' })
  }
  const removeItem = (id) => {
    const filteredItems = items.filter(el => el.id !== id);
    dispatch({ type: 'REMOVE_FROM_CART', payload: id })
    filteredItems ? setItems(filteredItems) : setItems([])
  }
  const saveOrder = async () => {
    if (store.userId && store.cart.length) {
      if (items.length > 0) {
        Alert.alert('Make an order', 'Confirm you want to order this items?', [{
          text: 'No'
        },
        {
          text: 'Yes',
          onPress: () => {
            setItems([])
            db.collection("Orders").add({ Items: items, user: store.userId })
            dispatch({ type: 'CLEAR_CART' })
          }
        }])
      }
    } else if (store.cart.length) {
      navigation.navigate('Account')
    } else {
      navigation.navigate('Main')
    }
  }
  return (
    <View style={styles.container}>
      <TopBar style={styles.navbar} tabName={'Cart'} />
      {placeholder}
      <FlatList data={items} renderItem={renderItem} keyExtractor={item => item.id + Math.random().toString()} />
      <View style={styles.buttonBlock}>
        <NavButton text='Clear' style={styles.redbutton} onPress={clearCart} />
        <NavButton text='Order' style={styles.greenbutton} onPress={saveOrder} />
      </View>
    </View>
  )
}
export default Cart
