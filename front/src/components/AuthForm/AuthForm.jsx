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
        navigation.navigate('Главная')
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
        navigation.navigate('Главная')
      }
    })

  };

  const logOutHandler = () => {
    auth.signOut()
    dispatch({ type: "LOG_OUT" })
    navigation.navigate('Главная')
  }

  useEffect(() => {
    auth.onAuthStateChanged(async user => {
      if (user) {
        await dispatch({ type: "AUTH", payload: user.uid })
        console.log('')
      } else {
        console.log('')
      }
    })
  }, [])
  return (
    <View>
      {store.userId ? (<NavButton text="Выйти" style={styles.redbutton} onPress={logOutHandler} />) : (<>
        <TextInput onChangeText={(text) => setEmail(text)} style={styles.input} placeholder='e-mail' />
        <TextInput secureTextEntry={true} onChangeText={(text) => setPassword(text)} style={styles.input} placeholder='пароль' />
        <View style={styles.buttonBlock}>
          <NavButton text='Войти' style={styles.greenbutton} onPress={loginHandler} />
          <NavButton text='Регистрация' style={styles.greenbutton} onPress={registerHandler} />
        </View>
      </>)}
    </View>
  );
}
export default AuthForm;
