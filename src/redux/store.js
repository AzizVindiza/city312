import {configureStore} from "@reduxjs/toolkit";
import {apiSlice} from "./ApiSlice/ApiSlice";
import storage from  "redux-persist/lib/storage"
import {persistReducer} from "redux-persist";
import {combineReducers} from "@reduxjs/toolkit";

const persistConfig = {
    key: "root",
    version :1,
    storage
}

const reducer = combineReducers({
    [apiSlice.reducerPath]: apiSlice.reducer,
    movies: moviesReducer,
})

const persistedReducer = persistReducer(persistConfig,reducer)

const store  = configureStore({
    reducer : persistedReducer,
    middleware : (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck:false
    }).concat(apiSlice.middleware),
})
export default store