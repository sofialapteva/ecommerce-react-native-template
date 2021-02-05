import React from 'react'
import { View, Text } from 'react-native'
import tailwind from 'tailwind-rn'

function OrderDetails({ id, user, items }) {
  const sum = items?.reduce((acc, el) => +acc + +el.price, 0)
  return (
    <View style={tailwind('border-2 border-gray-200 flex flex-col m-2 p-3 justify-around bg-white rounded-lg')}>
      <View>
        <Text style={tailwind('text-lg')}>Заказчик:</Text>
        <Text>ФИО: {user.name} {user.surname}</Text>
        <Text>Телефон: {user.phone}</Text>
        <Text>Адрес доставки: {user.city}, {user.street}, {user.apartment}</Text>
      </View>

      <View>
        <Text style={tailwind('text-lg')}>Заказ:</Text>
        {items?.map((el, index) => (
          <View key={index}>
            <Text> {index}: {el.productName}, цена: {el.price}</Text>
          </View>
        ))}
      </View>
      <Text style={tailwind('text-lg my-2')}>Сумма заказа: {sum} рублей</Text>
    </View>
  )
}

export default OrderDetails
