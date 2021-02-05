import React from 'react'
import { View, FlatList, Alert } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { thunkGetItems } from '../../redux/store'
import TopBar from '../TopBar/TopBar'
import styles from '../../styles'
import ItemOnMain from './ItemOnMain'
import { TextInput } from 'react-native-gesture-handler'

function Main() {
  const reduxItems = useSelector(({ reduxItems }) => reduxItems)
  const [searchRes, setSearchRes] = React.useState('')
  const [text, setText] = React.useState('')
  const filterTag = useSelector(({ filterTag }) => filterTag)
  const dispatch = useDispatch()


  React.useEffect(() => {
    dispatch(thunkGetItems(filterTag))
  }, [])

  React.useEffect(() => {
    dispatch(thunkGetItems(filterTag))
    setSearchRes('')
  }, [filterTag])


  function renderItem({ item }) {
    return <ItemOnMain {...item} />
  }

  function findItems() {
    if (text !== '') {
      const searchRes = reduxItems.filter(el => el.productName.toLowerCase().includes(text.trim().toLowerCase()))
      searchRes.length ? setSearchRes(searchRes) : Alert.alert('', 'No results')
      setText('')
    } else {
      dispatch(thunkGetItems())
      setSearchRes('')
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <TopBar
        style={styles.navbar}
        tabName={'Шаблон E-commerce'} />
      <TextInput value={text}
        style={styles.input}
        placeholder='поиск'
        onChangeText={input => setText(input)}
        onSubmitEditing={findItems} />
      <FlatList
        data={searchRes || reduxItems}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

export default Main
