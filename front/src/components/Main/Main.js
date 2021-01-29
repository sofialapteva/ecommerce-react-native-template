import React from 'react'
import { View, Text, Button } from 'react-native'
import { db } from '../../../firebase'

import TopBar from '../TopBar/TopBar'
import styles from '../../styles'
import ItemOnMain from './ItemOnMain'

function Main({ navigation }) {
  const [items, setItems] = React.useState([])
  const fetchItems = () => {
    db.collection("Items").get().then((data) => {
      data.forEach((doc) => {
        const details = doc.data()
        setItems((pre => [...pre, { id: doc.id, oldPrice: details.oldPrice, price: details.price, productName: details.productName, tags: details.tags }]))
      });
    })
  }
  React.useEffect(() => {
    fetchItems()
  }, [])

  return (
    <View>
      <TopBar style={styles.navbar} tabName={'Ecommerce Template'} />
      <Button title='Account' onPress={() => navigation.navigate('Account')} />
      <Button title='Menu' onPress={() => navigation.navigate('Menu')} />
      <Button title='Cart' onPress={() => navigation.navigate('Cart')} />
      <Text>Main component</Text>
      {items.map(el => {
        console.log(el)
        return <ItemOnMain {...el} />
      }
      )}
    </View>
  )
}

export default Main
