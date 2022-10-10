import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./app/store";


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </>
);
