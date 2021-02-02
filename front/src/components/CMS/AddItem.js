import React, { useState, useRef } from "react";
import { useDispatch } from 'react-redux'
import { View, TextInput } from "react-native";
import { db } from "../../../firebase";
import { thunkGetItems } from '../../redux/store'
import Camera from './CamCapture'
import NavButton from "../commonComponents/NavButton";
import WebcamCapture from "./WebcamCapture";
import styles from "../../styles";

function AddItem() {
  const [img, setImg] = useState('')
  const dispatch = useDispatch()
  const name = useRef(null);
  const price = useRef(null);
  const tags = useRef(null);
  const addItem = () => {
    db.collection("Items")
      .add({
        productName: name.current.value,
        price: price.current.value,
        oldPrice: price.current.value,
        uri: img,
        tags: tags.current.value.trim().split(" "),
      })
    dispatch(thunkGetItems())
    name.current.value = "";
    price.current.value = "";
    tags.current.value = "";
  };
  const saveImage = uri => setImg(uri)

  return (
    <View style={styles.container}>
      <View style={styles.addItem}>
        <TextInput ref={name} style={styles.input} placeholder="name" />
        <TextInput ref={price} style={styles.input} placeholder="price" />
        <TextInput ref={tags} style={styles.input} placeholder="tags" />
      </View>
      {/* <WebcamCapture saveImage={saveImage} /> */}
      <NavButton text="Add item" style={styles.greenbutton} onPress={addItem} />
      <Camera />
    </View>
  );
}
export default AddItem;
