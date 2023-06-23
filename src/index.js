import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux";
import store from "./redux/store";
import {PersistGate} from "redux-persist/integration/react";
import {persistStore} from "redux-persist";
import Context from "./Context";

const  persistor = persistStore(store)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <Context>
                <App/>
            </Context>
        </PersistGate>
    </Provider>
);
