import { compose, createStore, combineReducers, applyMiddleware } from "redux";
import persistState from "redux-localstorage";
import { loginReducer } from "./user-actions/Reducer";

import thunk from "redux-thunk";

const rootReducer = combineReducers({
  login: loginReducer
});

const enhancer = compose(applyMiddleware(thunk), persistState());

const store = createStore(rootReducer, {}, enhancer);

export default store;
