import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import calendarioReducer from './reducers/calendarioReducer';
import thunk from "redux-thunk"


//const store = createStore(calendarioReducer,compose (applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));

// Para que Firefox no de error
//const store = createStore( calendarioReducer, compose( applyMiddleware(thunk), window.navigator.userAgent.includes('Chrome') ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : compose, ), )

//Para el build y no tire problemas de seguridad
const store = createStore(calendarioReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
      <App />    
    </Provider>,
  document.getElementById('root')
);
