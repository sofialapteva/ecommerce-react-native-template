import React from 'react'
import { View, FlatList, Alert } from 'react-native'
import { thunkGetOrders } from '../../redux/store'
import { useDispatch, useSelector } from 'react-redux'
import OrderDetails from './OrderDetails'
function Orders() {
  const dispatch = useDispatch()
  const store = useSelector(store => store)

  React.useEffect(() => {
    dispatch(thunkGetOrders())
  }, [store.reduxOrders])

  const renderItem = ({ item }) => <OrderDetails {...item} />
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={store.reduxOrders}
        renderItem={renderItem}
        keyExtractor={i => new Date().getMilliseconds() + Math.random * 100} />
    </View>
  )
}

export default Orders
