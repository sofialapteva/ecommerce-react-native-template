import React from "react";
import { View } from "react-native";
import { db } from "../../../firebase";
import NavButton from "../commonComponents/NavButton";
import { TextInput } from "react-native-gesture-handler";
import styles from "../../styles";
import { thunkGetItems } from '../../redux/store'
import { useDispatch } from 'react-redux'
function AddItem() {
  const dispatch = useDispatch()
  const name = React.useRef(null);
  const price = React.useRef(null);
  const image = React.useRef(null);
  const tags = React.useRef(null);

  const addItem = () => {
    db.collection("Items")
      .add({
        productName: name.current.value,
        price: +price.current.value,
        oldPrice: +price.current.value,
        uri: image.current.value,
        tags: tags.current.value.trim().split(' ').filter(el => el !== '' && el !== ' ')
      })
    dispatch(thunkGetItems())
    name.current.value = ''
    price.current.value = ''
    image.current.value = ''
    tags.current.value = ''
  };

  return (
    <View style={styles.container}>
      <View style={styles.addItem}>
        <TextInput ref={name} style={styles.input} placeholder="name" required />
        <TextInput ref={price} style={styles.input} placeholder="price" required />
        <TextInput ref={image} style={styles.input} placeholder="image" required />
        <TextInput ref={tags} style={styles.input} placeholder="tags" required />
      </View>
      <NavButton
        text="Add item"
        style={styles.greenbutton}
        onPress={addItem}
      />
    </View>
  );
}
export default AddItem;
