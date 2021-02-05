import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import { View, TextInput, Image } from "react-native";
import { db, storage } from "../../../firebase";
import { thunkGetItems } from '../../redux/store'
// import firebase from 'firebase'
require('firebase/firestore')
require('firebase/firebase-storage')

import CameraExpo from './Camera'
import NavButton from "../commonComponents/NavButton";
import styles from "../../styles";
function AddItem() {
  const [camera, setCamera] = useState(false)
  const [img, setImg] = useState('')
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [tags, setTags] = useState('')
  const dispatch = useDispatch()

  const addItem = () => {
    console.log('')
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
    setImg('')
  };
  const saveImg = async (uri) => {
    const childPath = Math.random() * 10000 + ''
    const responce = await fetch(uri.uri);
    const blob = await responce.blob();
    const image = storage.ref().child(childPath).put(blob)
    const taskProgress = snapshot => {
      console.log('');
    }
    const taskCompleted = () => {
      image.snapshot.ref.getDownloadURL().then((snapshot) => {
        setImg(snapshot)
      })
    }
    const taskError = snapshot => {
      console.log('');
    }
    image.on("state_changed", taskProgress, taskError, taskCompleted)
    setCamera(false)
  }

  return (
    <View style={styles.container}>
      <View style={styles.addItem}>
        <TextInput onChangeText={setName} style={styles.input} placeholder='Имя' value={name} />
        <TextInput onChangeText={setPrice} style={styles.input} placeholder="Цена" value={price} />
        <TextInput onChangeText={setTags} style={styles.input} placeholder="Теги" value={tags} />
      </View>
      {img && !camera ? <Image source={{ uri: img }} style={{ height: 100, width: 100 }} alt='' /> : <></>}
      <NavButton text="Сделать фото" style={styles.greenbutton} onPress={() => setCamera(pre => !pre)} />
      {camera ? <CameraExpo saveImg={saveImg} /> : <></>}
      <NavButton text="Добавить" style={styles.greenbutton} onPress={addItem} />


    </View>
  );
}
export default AddItem;
