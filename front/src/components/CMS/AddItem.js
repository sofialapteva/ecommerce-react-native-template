import React from "react";
import { View } from "react-native";
import { db } from "../../../firebase";
import NavButton from "../commonComponents/NavButton";
import { TextInput } from "react-native-gesture-handler";
import { useRef } from "react";
import styles from "../../styles";
import WebcamCapture from "./WebcamCapture";
import { thunkGetItems } from '../../redux/store'
import { useDispatch } from 'react-redux'
function AddItem() {
  const dispatch = useDispatch()
  const name = useRef(null);
  const price = useRef(null);
  const image = useRef(null);
  const tags = useRef(null);
  const addItem = () => {
    console.log(name.current.value);
    console.log(price.current.value);
    console.log(image.current.value);
    console.log(tags.current.value);
    db.collection("Items")
      .add({
        productName: name.current.value,
        price: price.current.value,
        oldPrice: price.current.value,
        uri: image.current.value,
        tags: tags.current.value.trim().split(" "),
      })
      .then(function () {
        console.log("Document successfully written!");
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });
    dispatch(thunkGetItems())
    name.current.value = "";
    price.current.value = "";
    image.current.value = "";
    tags.current.value = "";
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
