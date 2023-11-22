import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import webSocketReducer from './websocketReducer';
import userActionReducer from './userActionReducer';

const rootReducer = combineReducers({
    webSocket: webSocketReducer,
    userData: userActionReducer,
    // other reducers go here
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;

