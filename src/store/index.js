import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers/todos';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

export default createStore(rootReducer, applyMiddleware(thunk, logger));