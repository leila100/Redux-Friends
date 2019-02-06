import React from "react"
import ReactDOM from "react-dom"

import { createStore, applyMiddleware } from "redux"
import logger from "redux-logger"
import thunk from "redux-thunk"
import { Provider } from "react-redux"

import App from "./App"
import { reducer } from "./reducers"
import "./index.css"

const store = createStore(reducer, applyMiddleware(thunk, logger))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)
