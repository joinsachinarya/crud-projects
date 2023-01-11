
import reducer from "./reducers/index";
import { legacy_createStore as createStore } from 'redux';
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

export const store = createStore (
    reducer,
    {},
    applyMiddleware(thunk)
)