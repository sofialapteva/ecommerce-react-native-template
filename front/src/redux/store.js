import { act } from 'react-test-renderer';
import { createStore } from 'redux'
const initState = {
  userId: "",
  cart: [],
  filterTag: ''
};

export const store = createStore(reducer);

export const actionLogOut = () => {
  return {
    type: "LOG_OUT",
  };
};


function reducer(state = initState, action) {
  if (action.type === "AUTH") {
    return {
      ...state,
      userId: action.payload,
    };
  } else if (action.type === "LOG_OUT") {
    return initState;
  } else if (action.type === "ADD_TO_CART") {
    return { ...state, cart: [...state.cart, action.payload] }
  } else if (action.type === "REMOVE_FROM_CART") {
    const filteredItemIds = state.cart.filter(el => el !== action.payload)
    return { ...state, cart: filteredItemIds }
  } else if (action.type === "CLEAR_CART") {
    return { ...state, cart: [] }
  } else if (action.type === "SET_TAG") {
    const tag = (action.payload === 'Everything') ? '' : action.payload
    return { ...state, filterTag: tag }
  }
  return state;
};
