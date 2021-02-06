import React from "react"
import ReactDOM from "react-dom"
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import App from "./main/app"
import StoreConfig from "../src/main/Reducers/StoreConfig/StoreConfig"
import Promise from "redux-promise"
import Multi from "redux-multi"
import Thunk from "redux-thunk"
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = applyMiddleware(Thunk,Multi,Promise)(createStore)(StoreConfig, devTools)



ReactDOM.render(
    <Provider store={store}>
        <App></App>
    </Provider>
    , document.getElementById("root"))