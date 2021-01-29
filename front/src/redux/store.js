import React from 'react';
import { createStore } from 'redux'
const initState = {
  email: "",
  password: "",
};
const reducer = (state = initState, action) => {
  if (action.type === "LOG_IN") {
    return {
      ...state,
      email: action.payload.email,
      password: action.payload.password
    };
  } else if (action.type === "LOG_OUT") {
    return initState;
  } else if (action.type === "SIGN_UP") {
    return {
      ...state,
      email: action.payload.email,
      password: action.payload.password
    };
  }
  return state;
};
export const store = createStore(reducer);
export const actionLogIn = ({ user }) => {
  return {
    type: "LOG_IN",
    payload: user,
  };
};
export const actionLogOut = (text) => {
  return {
    type: "LOG_OUT",
    payload: text,
  };
};
export const actionRegister = ({ user }) => {
  return {
    type: "SIGN_UP",
    payload: user,
  };
};
