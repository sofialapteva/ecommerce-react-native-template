import React from 'react'
import { View, Text } from 'react-native'
import tailwind from 'tailwind-rn'

function OrderDetails({ id, user, items }) {
  const sum = items?.reduce((acc, el) => +acc + +el.price, 0)
  return (
    <View style={tailwind('border-2 border-gray-300 flex flex-col m-2 p-3 justify-around bg-gray-100  rounded-lg')}>
      <View>
        <Text style={tailwind('text-lg')}>Заказчик:</Text>
        <Text>Имя: {user.name}</Text>
        <Text>Фамилия: {user.surname}</Text>
        <Text>Телефон: {user.phone}</Text>
        <Text>Адрес доставки: {user.city}, {user.street}, {user.apartment}</Text>
      </View>

      <View>
        <Text style={tailwind('text-lg')}>Заказ:</Text>
        {items?.map((el, index) => (
          <View key={index}>
            <Text> {index}: {el.productName}, цена: {el.price}</Text>
            <Text>ID: {el.id}</Text>
          </View>
        ))}
      </View>
      <Text style={tailwind('text-lg my-2')}>Сумма заказа: {sum} рублей</Text>
    </View>
  )
}

export default OrderDetails
