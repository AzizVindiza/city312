import {combineReducers, configureStore} from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'
import {apiSlice} from "./ApiSlice/ApiSlice";
import  user from  "./reducers/registerSlice"
import {persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";

const persistConfig = {
    key:'root',
    storage,
}
const rootReducer = combineReducers({
    // user,
    // [apiSlice.reducePath] : apiSlice.reducer
})
const persistedReducer = persistReducer(persistConfig,rootReducer)


const store = configureStore({
    reducer : persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                // Ignore these action types
            },
        })
            // .concat(apiSlice.middleware),
})
export const persist = persistStore(store)
export default store