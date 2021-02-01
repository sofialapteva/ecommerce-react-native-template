import { applyMiddleware, createStore, compose } from 'redux'
import thunk from 'redux-thunk'
import { db } from '../../firebase'

const initState = {
  userId: "",
  cart: [],
  filterTag: '',
  reduxItems: []
};

export const store = createStore(reducer, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

export const thunkGetItems = (filterTag = '') => {
  return async (dispatch) => {
    db.collection("Items").get().then((data) => {
      let arr = []
      data.forEach((doc) => {
        const details = doc.data()
        if (filterTag !== '') {
          details.tags.includes(filterTag) ?
            arr.push({
              id: doc.id,
              oldPrice: details.oldPrice,
              price: details.price,
              productName: details.productName,
              tags: details.tags,
              uri: details.uri
            }) : ''
        } else {
          arr.push({
            id: doc.id,
            oldPrice: details.oldPrice,
            price: details.price,
            productName: details.productName,
            tags: details.tags,
            uri: details.uri
          })
        }
      });
      dispatch({ type: 'SET_ITEMS', payload: arr })
    })
  }
}


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
  } else if (action.type === 'SET_ITEMS') {
    return { ...state, reduxItems: action.payload }
  }
  return state;
};
