import React from "react";
import { View, Button, TextInput } from "react-native";

function AuthForm() {

const [login, setLogin] = React.useState('login')
const [password, setPassword] = React.useState('password')

const loginHandler = () => {
  console.log('login')
}

  return (
    <View>
      <TextInput onChangeText={(text) => setLogin(text)}/>
      <TextInput onChangeText={(text) => setPassword(text)}/>
      <Button title='войти' onPress={loginHandler}/>
    </View>
  );
}

export default AuthForm;

