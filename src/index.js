import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './firebase'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import calendarioReducer from './reducers/calendarioReducer';
import thunk from "redux-thunk"

const store = createStore(calendarioReducer,compose (applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

ReactDOM.render(
  <Provider store={store}>
      <App />,    
    </Provider>,
  document.getElementById('root')
);
