import { createStore, combineReducers } from "redux";

// Action types
const actionTypes = {
  BUY_CAKE: "BUY_CAKE",
  BUY_ICECREAM: "BUY_ICECREAM",
};

// Action creator
const buyCake = () => {
  return {
    type: actionTypes.BUY_CAKE,
  };
};

const buyIcecream = () => {
  return {
    type: actionTypes.BUY_ICECREAM,
  };
};

// Initial cake state
const initialCakeState = {
  numOfCake: 10,
};

// Cake reducer
const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case actionTypes.BUY_CAKE:
      return { ...state, numOfCake: state.numOfCake - 1 };
    default:
      return state;
  }
};

// Initial icecream state
const initialIcecreamState = {
  numOfIcecream: 20,
};

// Icecream reducer
const icecreamReducer = (state = initialIcecreamState, action) => {
  switch (action.type) {
    case actionTypes.BUY_ICECREAM:
      return { ...state, numOfIcecream: state.numOfIcecream - 1 };
    default:
      return state;
  }
};

// Combined reducer
const rootReducer = combineReducers({ cakeReducer, icecreamReducer });

// Store
const store = createStore(rootReducer);

console.log(store.getState());
const unsubscribe = store.subscribe(() => console.log(store.getState()));
store.dispatch(buyCake());
store.dispatch(buyIcecream());
store.dispatch(buyCake());
store.dispatch(buyIcecream());
unsubscribe();
