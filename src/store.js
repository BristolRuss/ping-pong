import { createStore, compose } from "redux";
import persistState from "redux-localstorage";
import reducer from './reducer';
import initial from './initial';

const composeEnhancers =
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
reducer,
initial,
composeEnhancers(persistState())
);

export default store;