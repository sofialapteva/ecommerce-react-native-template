import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import { View, TextInput } from "react-native";
import { db, storage } from "../../../firebase";
import { thunkGetItems } from '../../redux/store'
// import firebase from 'firebase'
require('firebase/firestore')
require('firebase/firebase-storage')

import CameraExpo from './Camera'
import NavButton from "../commonComponents/NavButton";
import styles from "../../styles";
function AddItem() {
  const [img, setImg] = useState('')
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [tags, setTags] = useState('')
  const dispatch = useDispatch()

  const addItem = () => {
    console.log(name,
      price,
      tags)
    db.collection("Items")
      .add({
        productName: name,
        price: price,
        oldPrice: price,
        uri: img,
        tags: tags.trim().split(" "),
      })
    dispatch(thunkGetItems())
    setName('')
    setPrice('')
    setTags('')
  };
  const saveImg = async (uri) => {
    console.log(uri)
    const childPath = Math.random() * 10000 + ''
    const responce = await fetch(uri.uri);
    console.log('responce', responce)
    const blob = await responce.blob();

    const image = storage.ref().child(childPath).put(blob)
    const taskProgress = snapshot => {
      console.log('transferred' + snapshot.bytesTransferred)
    }
    const taskCompleted = () => {
      image.snapshot.ref.getDownloadURL().then((snapshot) => {
        setImg(snapshot)
        console.log(snapshot)
      })
    }
    const taskError = snapshot => {
      console.log(snapshot);
    }
    image.on("state_changed", taskProgress, taskError, taskCompleted)
  }

  return (
    <View style={styles.container}>
      <View style={styles.addItem}>
        <TextInput onChangeText={setName} style={styles.input} placeholder="name" value={name} />
        <TextInput onChangeText={setPrice} style={styles.input} placeholder="price" value={price} />
        <TextInput onChangeText={setTags} style={styles.input} placeholder="tags" value={tags} />
      </View>
      <NavButton text="Add item" style={styles.greenbutton} onPress={addItem} />
      <CameraExpo saveImg={saveImg} />
    </View>
  );
}
export default AddItem;
