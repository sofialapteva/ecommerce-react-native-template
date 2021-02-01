import React from 'react'
import { View, FlatList, Alert } from 'react-native'
import { db } from '../../../firebase'
import { thunkGetOrders } from '../../redux/store'
import { useDispatch, useSelector } from 'react-redux'
import OrderDetails from './OrderDetails'
function Orders() {
  const dispatch = useDispatch()
  const state = useSelector(state => state)

  React.useEffect(() => {
    dispatch(thunkGetOrders())
  }, [store.reduxOrders])

  const renderItem = ({ item }) => <OrderDetails {...item} />
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={item => new Date().getMilliseconds() + Math.random * 100} />
    </View>
  )
}

export default Orders
