import React from "react";
import { createStore } from "redux";

const basicreduxapp = () => {
  // STORE -> GLOBALIZED STATE

  // ACTION
  const increment = () => {
    return {
      type: "INCREMENT",
    };
  };
  const decrement = () => {
    return {
      type: "DECREMENT",
    };
  };

  //REDUCER
  const counter = (state = 0, action) => {
    switch (action.type) {
      case "INCREMENT":
        return state + 1;
      case "DECREMENT":
        return state - 1;
      default:
        return state;
    }
  };

  let store = createStore(counter);
  // display it in the console

  store.subscribe(() => console.log(store.getState()));

  // DISPATCH

  store.dispatch(increment());
  store.dispatch(increment());
  store.dispatch(increment());
  store.dispatch(decrement());
  store.dispatch(decrement());

  return <div>REDUX</div>;
};

export default basicreduxapp;
