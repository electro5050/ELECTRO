import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import ScrollToTop from './ScrollToTop';
// import 'bootstrap/dist/css/bootstrap.min.css';

import { Provider  } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import websocketReducer from 'redux/websocketReducer';


const rootReducer = combineReducers({
  websocketReducer,
});

const store = createStore(rootReducer);

ReactDOM.render(
  <BrowserRouter >
    {/* <ScrollToTop />
     */}
     <Provider store={store}>
     <App />
     </Provider>

  </BrowserRouter>,
  document.getElementById('root')
);
