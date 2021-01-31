import React from 'react'
import { View, FlatList, Button, Alert } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { db } from '../../../firebase'

import TopBar from '../TopBar/TopBar'
import styles from '../../styles'
import ItemOnDeleteItems from './ItemOnDeleteItems'
import { TextInput } from 'react-native-gesture-handler'

function DeleteItems() {
  const [items, setItems] = React.useState([])
  const [text, setText] = React.useState('')
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
            setItems((pre =>
              [...pre, {
                id: doc.id,
                oldPrice: details.oldPrice,
                price: details.price,
                productName: details.productName,
                tags: details.tags,
                uri: details.uri
              }])) : ''
        } else {
          setItems((pre => [...pre, {
            id: doc.id,
            oldPrice: details.oldPrice,
            price: details.price,
            productName: details.productName,
            tags: details.tags,
            uri: details.uri
          }]))
        }
      });
    })
  }

  function renderItem({ item }) {
    return <ItemOnDeleteItems {...item} />
  }

  function findItems() {
    if (text !== '') {
      const searchRes = items.filter(el => el.productName.toLowerCase().includes(text.trim().toLowerCase()))
      searchRes.length ? setItems(searchRes) : Alert.alert('', 'No results')
      setText('')
    } else {
      fetchItems()
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <TopBar
        style={styles.navbar}
        tabName={'Ecommerce Template'} />
      <TextInput value={text}
        style={styles.input}
        placeholder='search'
        onChangeText={input => setText(input)}
        onSubmitEditing={findItems} />
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={item => item.id} />
    </View>
  )
}

export default DeleteItems
