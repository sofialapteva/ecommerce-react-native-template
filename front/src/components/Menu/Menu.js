import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import TopBar from '../TopBar/TopBar'
import styles from '../../styles'
import tailwind from 'tailwind-rn';
import { AntDesign } from '@expo/vector-icons';
import { stylesTailwind } from '../../styles'
function Menu({ navigation }) {
  const categories = [
    {
      name: 'Category 1',
      icon: 'phone'
    },
    {
      name: 'Category 2',
      icon: 'cloudo'
    }, {
      name: 'Category 3',
      icon: 'smileo'
    }, {
      name: 'Category 4',
      icon: 'bells'
    },
    {
      name: 'Category 5',
      icon: 'videocamera'
    },
    {
      name: 'Category 6',
      icon: 'staro'
    },
  ]
  return (
    <View>
      <TopBar style={styles.navbar} tabName={'Menu'} />
      <View style={tailwind('p-5')}>
        {categories.map((el, index) => (
          <TouchableOpacity activeOpacity={0.7} key={index} style={tailwind(stylesTailwind.menuItem)} onPress={() => navigation.navigate('Cart')}>
            <Text style={tailwind(stylesTailwind.menuText)}>{el.name}</Text>
            <AntDesign name={el.icon} size={24} color="black" />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}

export default Menu
