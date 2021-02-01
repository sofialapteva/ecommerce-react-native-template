import React from "react";
import { View } from "react-native";
import { db } from "../../../firebase";
import NavButton from "../commonComponents/NavButton";
import { TextInput } from "react-native-gesture-handler";
import styles from "../../styles";
import WebcamCapture from "./WebcamCapture";
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
  
    const addImage = () => {
   <WebcamCapture />;
  };
  return (
    <View style={styles.container}>
      <View style={styles.addItem}>
        <TextInput ref={name} style={styles.input} placeholder="name" />
        <TextInput ref={price} style={styles.input} placeholder="price" />
        <TextInput ref={image} style={styles.input} placeholder="image" />
        <NavButton text="photo" style={styles.greenbutton} onClick={addImage} />
        <TextInput ref={tags} style={styles.input} placeholder="tags" />
      </View>
      <NavButton text="Add item" style={styles.greenbutton} onPress={addItem} />
      <WebcamCapture />
    </View>
  );
}
export default AddItem;
