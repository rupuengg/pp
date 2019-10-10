import { createStore } from 'redux';
import rootReducer from '../reducers';
const initialState = {};
// const middlewares = [];

const store = createStore(rootReducer, initialState);

export default store;