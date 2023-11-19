import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import webSocketReducer from './websocketReducer';

const rootReducer = combineReducers({
    webSocket: webSocketReducer,
    // other reducers go here
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

