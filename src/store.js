import { createStore } from 'redux';
import calcReducer from './calcReducer';

const store = createStore(calcReducer);

export default store;