import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from './profileReducer.js'
import messagesReducer from './messagesReducer.js'
import usersReducer from "./usersReducer.js";
import authReducer from './authReducer.js'
import appReducer from "./appReducer.js";
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store