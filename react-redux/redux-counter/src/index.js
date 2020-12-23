import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import myAppStore from './redux/store'
import {Provider} from 'react-redux'


ReactDOM.render(
  <Provider store={myAppStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
