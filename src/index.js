import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {PersistGate} from "redux-persist/integration/react";
import {persist} from "./redux/store";
import {Provider} from "react-redux";
import store from "./redux/store"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persist}>
            <App/>
        </PersistGate>
    </Provider>
);
