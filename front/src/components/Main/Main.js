import React from 'react'
import { View, FlatList, Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { db } from '../../../firebase'

import TopBar from '../TopBar/TopBar'
import styles from '../../styles'
import ItemOnMain from './ItemOnMain'

function Main() {
  const [items, setItems] = React.useState([])
  const dispatch = useDispatch()
  const filterTag = useSelector(({ filterTag }) => filterTag)

  React.useEffect(() => {
    fetchItems()
  }, [filterTag])

  function fetchItems() {
    setItems([])
    db.collection("Items").get().then((data) => {
      data.forEach((doc) => {
        const details = doc.data()
        if (filterTag !== '') {
          details.tags.includes(filterTag) ?
            setItems((pre => [...pre, { id: doc.id, oldPrice: details.oldPrice, price: details.price, productName: details.productName, tags: details.tags, uri: details.uri }])) : ''
        } else {
          setItems((pre => [...pre, { id: doc.id, oldPrice: details.oldPrice, price: details.price, productName: details.productName, tags: details.tags, uri: details.uri }]))
        }
      });
    })
  }

  function renderItem({ item }) {
    return <ItemOnMain {...item} addItemToCart={addItemToCart} />
  }

  function addItemToCart(id) {
    dispatch({ type: "ADD_TO_CART", payload: id })
  }

  return (
    <View style={{ flex: 1 }}>
      <TopBar style={styles.navbar} tabName={'Ecommerce Template'} />
      <FlatList data={items} renderItem={renderItem} keyExtractor={item => item.id} />
    </View>
  )
}

export default Main
