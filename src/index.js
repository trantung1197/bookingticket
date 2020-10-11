import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "../node_modules/swiper/css/swiper.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/jquery/dist/jquery.min.js";
import "../node_modules/popper.js/dist/umd/popper.js";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "../node_modules/swiper/js/swiper.js";
import "./scss/main.scss";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./redux/reducers";
import thunk from "redux-thunk";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
