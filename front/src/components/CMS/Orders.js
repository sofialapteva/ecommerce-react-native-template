import React from 'react'
import { View, FlatList, Alert } from 'react-native'
import { thunkGetOrders } from '../../redux/store'
import { useDispatch, useSelector } from 'react-redux'
import OrderDetails from './OrderDetails'

function Orders() {
  const dispatch = useDispatch()
  const reduxOrders = useSelector(({ reduxOrders }) => reduxOrders)
  function completeHandler() {

  }

  React.useEffect(() => {
    dispatch(thunkGetOrders())
  }, [])

  function renderItem(props) {
    return <OrderDetails {...props.item} />
  }

  if (reduxOrders) {
    return (
      <View style={{ flex: 1 }} >
        <FlatList
          data={reduxOrders}
          renderItem={renderItem}
          keyExtractor={el => el.id} />
      </View>
    )
  }
}

export default Orders
