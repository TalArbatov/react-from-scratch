import ReactDOM from 'react-dom';
import React from 'react';
import App from './app';
import {combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';
import counterReducer from './store/reducers/counterReducer';

const rootReducer = combineReducers({
    counterReducer: counterReducer,
})
const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}><App /></Provider> , document.getElementById('root'))