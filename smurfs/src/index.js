import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import thunk from 'redux-thunk'
import {applyMiddleware, createStore} from 'redux'
import {smurfReducer} from './reducers/smurfReducers'
import {Provider} from 'react-redux'

const store = createStore(smurfReducer, applyMiddleware(thunk))

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));
