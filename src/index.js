import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import calendarioReducer from './reducers/calendarioReducer';
import thunk from "redux-thunk"

const store = createStore( calendarioReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
      <App />    
    </Provider>,
  document.getElementById('root')
);
