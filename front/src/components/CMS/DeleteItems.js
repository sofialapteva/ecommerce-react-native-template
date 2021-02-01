import React from 'react'
import { View, FlatList, Alert } from 'react-native'
import { db } from '../../../firebase'
import { thunkGetItems } from '../../redux/store'
import { useDispatch, useSelector } from 'react-redux'
import ItemDetails from './ItemDetails'
function Main() {
  const [items, setItems] = React.useState([])
  const state = useSelector(state => state)
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(thunkGetItems())
    setItems(state.reduxItems)
  }, [state.reduxItems])

  async function deleteHandler(id) {
    Alert.alert('delete')
    await db.collection("Items").doc(id).delete()
    dispatch(thunkGetItems())
  }

  function renderItem({ item }) {
    return <ItemDetails {...item} deleteHandler={deleteHandler} />
  }

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={item => item.id} />
    </View>
  )
}

export default Main
