import React from "react";
import { useSelector, useDispatch } from "react-redux";

// import our actions
import { increment, decrement, signin } from "./redux/actions";
// useDispatch give ability to dispatch actions

const Counter = () => {
  // get state with useSelector and get pice of state
  const counter = useSelector((state) => state.counterReducer);
  const isLogged = useSelector((state) => state.loggedReducer);

  const disptach = useDispatch();

  return (
    <div>
      <h1>
        {" "}
        Counter: <button onClick={() => disptach(decrement(2))}>-</button>
        {counter}
        <button onClick={() => disptach(increment())}>+</button>
      </h1>

      <h2>logged or not logged</h2>
      <p><button onClick={()=> disptach(signin())}>Toggle logged</button></p>
      {isLogged ? (
        <h3>some information if i am logged in</h3>
      ) : (
        <h3>not logged</h3>
      )}
    </div>
  );
};

export default Counter;
