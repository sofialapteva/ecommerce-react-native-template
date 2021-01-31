import React from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import TopBar from '../TopBar/TopBar'
import styles from '../../styles'
import tailwind from 'tailwind-rn';
import { db } from '../../../firebase'
import { FontAwesome5 } from '@expo/vector-icons';
import { stylesTailwind } from '../../styles'
import { useDispatch } from 'react-redux'
function Menu({ navigation }) {
  const [tags, setTags] = React.useState([])
  const dispatch = useDispatch()
  async function fetchTags() {
    let tagSet = new Set()
    const rawItems = await db.collection('Items').get();
    await rawItems.forEach(doc => {
      const itemTags = doc.data().tags
      tagSet.add(...itemTags)
    })
    setTags(['Everything', ...tagSet])
  }

  function setFilter(item) {
    dispatch({ type: 'SET_TAG', payload: item })
    navigation.navigate('Main')
  }

  React.useEffect(() => {
    fetchTags()
  }, [])
  const renderItem = ({ item }) => (<TouchableOpacity activeOpacity={0.7} style={tailwind(stylesTailwind.menuItem)} onPress={() => setFilter(item)}>
    <FontAwesome5 name="hashtag" size={24} color="black" />
    <Text style={tailwind(stylesTailwind.menuText)}>{item}</Text>
    <FontAwesome5 name="arrow-circle-right" size={24} color="black" style={tailwind('ml-10')} /></TouchableOpacity>)
  return (
    <View>
      <TopBar style={styles.navbar} tabName={'Menu'} />

      <View style={tailwind('p-5')}>
        <FlatList data={tags} renderItem={renderItem} keyExtractor={item => tags.indexOf(item).toString()} />
      </View>
      {tags.forEach(el => console.log(el))}
    </View>
  )
}

export default Menu
