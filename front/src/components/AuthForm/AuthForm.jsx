import React, { useEffect } from "react";
import { View, TextInput } from "react-native";
import { useDispatch, useSelector } from 'react-redux'
import { auth } from "../../../firebase";
import NavButton from '../commonComponents/NavButton'
import styles from '../../styles'

function AuthForm({ navigation }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  let store = useSelector(store => store)
  const dispatch = useDispatch()
  const loginHandler = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error))
    auth.onAuthStateChanged(user => {
      if (store.userId) {
        dispatch({ type: "AUTH", payload: user.uid })
        navigation.navigate('Main')
      }
    })
  };

  const registerHandler = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .catch((error) => alert(error))
    auth.onAuthStateChanged(user => {
      if (store.userId) {
        dispatch({ type: "AUTH", payload: user.uid })
        navigation.navigate('Main')
      }
    })

  };

  const logOutHandler = () => {
    auth.signOut()
    dispatch({ type: "LOG_OUT" })
    navigation.navigate('Main')
  }

  useEffect(() => {
    auth.onAuthStateChanged(async user => {
      if (user) {
        await dispatch({ type: "AUTH", payload: user.uid })
        console.log('user logged in', user.uid, store)
      } else {
        console.log('user logged out')
      }
    })
  }, [])
  return (
    <View>
      {store.userId ? (<NavButton text="Confirm logout" style={styles.redbutton} onPress={logOutHandler} />) : (<>
        <TextInput onChangeText={(text) => setEmail(text)} style={styles.input} placeholder='login' />
        <TextInput secureTextEntry={true} onChangeText={(text) => setPassword(text)} style={styles.input} placeholder='password' />
        <View style={styles.buttonBlock}>
          <NavButton text="Login" style={styles.greenbutton} onPress={loginHandler} />
          <NavButton text="Register" style={styles.greenbutton} onPress={registerHandler} />
        </View>
      </>)}
    </View>
  );
}
export default AuthForm;
