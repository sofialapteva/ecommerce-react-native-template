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
    console.log('')
    fetchCart()
  }, [store.cart])

  React.useEffect(() => {
    if (items.length === 0) {
      setPlaceholder(<View>
        <Text style={styles.largeText}>Добавьте товары в корзину</Text>
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
    if (store.userData.name && store.cart.length) {
      if (store.cart.length > 0) {
        Alert.alert('Оформить заказ', 'Подтвердите, вы хотите оформить заказ?', [{
          text: 'Нет'
        },
        {
          text: 'Да',
          onPress: () => {
            setItems([])
            db.collection("Orders").add({ Items: items, user: store.userData })
            dispatch({ type: 'CLEAR_CART' })
            navigation.navigate('Главная')
          }
        }])
      }
    } else if (store.cart.length) {
      navigation.navigate('Аккаунт')
    } else {
      navigation.navigate('Главная')
    }
  }
  return (
    <View style={styles.container}>
      <TopBar style={styles.navbar} tabName={'Корзина'} />
      {placeholder}
      <FlatList data={items} renderItem={renderItem} keyExtractor={item => item.id + Math.random().toString()} />
      <View style={styles.buttonBlock}>
        <NavButton text='Очистить' style={styles.redbutton} onPress={clearCart} />
        <NavButton text='Оформить' style={styles.greenbutton} onPress={saveOrder} />
      </View>
    </View>
  )
}
export default Cart
