import { combineReducers, createStore } from 'redux';
import {  dataPage, pageInfo } from './reducers';

const rootReducer = combineReducers({pageInfo: pageInfo, data: dataPage})
const store = createStore(rootReducer);
export default store;
