import React, { useEffect } from "react";
import { View, Button, TextInput } from "react-native";
import { auth } from "../../../firebase";
import { useDispatch } from 'react-redux'
import { actionLogIn, actionRegister, actionLogOut } from '../../redux/store'
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
        console.log('user loged out', user)
      }
    })
  }, [])
  return (
    <View>
      <TextInput onChangeText={(text) => setEmail(text)} />
      <TextInput onChangeText={(text) => setPassword(text)} />
      <Button title="SignIn" onPress={loginHandler} />
      <Button title="SignUp" onPress={registerHandler} />
      <Button title="SignOut" onPress={logOutHandler} />
    </View>
  );
}
export default AuthForm;
