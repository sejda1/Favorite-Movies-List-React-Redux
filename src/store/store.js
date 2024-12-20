import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import reducer from './reducers/index.js';
import logger from 'redux-logger';

export const myStore = createStore(reducer, applyMiddleware(logger));

