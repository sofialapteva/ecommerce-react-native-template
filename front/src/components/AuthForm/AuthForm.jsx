import React, { useEffect } from "react";
import { View, TextInput } from "react-native";
import { useDispatch } from 'react-redux'
import { auth } from "../../../firebase";
import { actionLogIn, actionRegister, actionLogOut } from '../../redux/store'
import NavButton from '../commonComponents/NavButton'
import styles, { stylesTailwind } from '../../styles'

function AuthForm({ navigation }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const dispatch = useDispatch()

  const loginHandler = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error))
    const user = {
      email: email,
      password: password
    }
    dispatch(actionLogIn({ user }))
    navigation.navigate('Cart')
  };

  const registerHandler = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .catch((error) => alert(error))
    const user = {
      email: email,
      password: password
    }
    dispatch(actionRegister({ user }))
    navigation.navigate('Main')
  };

  const logOutHandler = () => {
    auth.signOut()
    dispatch(actionLogOut({ email, password }))
    navigation.navigate('Main')
  }

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        console.log('user logged in', user)
      } else {
        console.log('user logged out')
      }
    })
  }, [])
  return (
    <View>
      <TextInput onChangeText={(text) => setEmail(text)} style={styles.input} />
      <TextInput onChangeText={(text) => setPassword(text)} style={styles.input} />
      <View style={styles.buttonBlock}>
        <NavButton text="SignIn" style={styles.greenbutton} onPress={loginHandler} />
        <NavButton text="SignUp" style={styles.greenbutton} onPress={registerHandler} />
        <NavButton text="SignOut" style={styles.redbutton} onPress={logOutHandler} />
      </View>
    </View>
  );
}
export default AuthForm;
