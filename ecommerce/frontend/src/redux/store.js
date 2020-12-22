import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// reducers
import {
  productListReducer,
  singleProductReducer,
} from "./reducers/productReducers";
const reducer = combineReducers({
  productList: productListReducer,
  singleProduct: singleProductReducer,
});

// middleware
// Redux Thunk middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. The inner function receives the store methods dispatch and getState as parameters.
const middleware = [thunk];

//store
const initialState = {};
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
