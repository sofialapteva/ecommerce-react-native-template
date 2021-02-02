import React from 'react'
import { View, FlatList, Alert } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { thunkGetItems } from '../../redux/store'
import TopBar from '../TopBar/TopBar'
import styles from '../../styles'
import ItemOnMain from './ItemOnMain'
import { TextInput } from 'react-native-gesture-handler'

function Main() {

  const [items, setItems] = React.useState(reduxItems)
  const [text, setText] = React.useState('')
  const filterTag = useSelector(({ filterTag }) => filterTag)
  const reduxItems = useSelector(({ reduxItems }) => reduxItems)
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(thunkGetItems(filterTag))
    setItems(reduxItems)
  }, [filterTag])


  function renderItem({ item }) {
    return <ItemOnMain {...item} />
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

export default Main
