import { createStore } from "redux";

// Actions
const actions = {
  BUY_CAKE: "BUY_CAKE",
};

// Action creator
const buyCake = () => {
  return { type: actions.BUY_CAKE };
};

// Initial state
const initialState = {
  numOfCake: 10,
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.BUY_CAKE:
      return { ...state, numOfCake: state.numOfCake - 1 };
    default:
      return state;
  }
};

// Store
const store = createStore(reducer);

console.log(store.getState());
const unsubscribe = store.subscribe(() => console.log(store.getState()));
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
unsubscribe();
