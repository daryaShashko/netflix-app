import { applyMiddleware, createStore }  from "redux";
import thunk from "redux-thunk";
import reducer from './../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const middleware = applyMiddleware(thunk);


export default (initialState) => {
  return createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))
};