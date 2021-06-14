import { createStore, combineReducers, applyMiddleware } from 'redux';
import {getAllUsers, registerUser} from '../middlewares/crud'


import userReducer from "../Reducers/UserReducer"

const reducer = combineReducers({ userReducer })
const store = createStore(reducer, applyMiddleware(registerUser, getAllUsers))

window.store = store

export default store
