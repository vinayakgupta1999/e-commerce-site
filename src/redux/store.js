import { combineReducers, configureStore} from "@reduxjs/toolkit";
import storage  from 'redux-persist/lib/storage';
import {persistReducer} from 'redux-persist'
import  cartReducer  from './cartSlice'
const persistConfig = {
    key: 'root',
    version:1,
    storage,
  }
const rootreducer=combineReducers({
    cartReducer 
})

const pReducer=persistReducer(persistConfig,rootreducer)
const store= configureStore({
    reducer:pReducer
})
export default store