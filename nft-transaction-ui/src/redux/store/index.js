import thunk from 'redux-thunk';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import userReducer from '../reducers';


const nftAppReducer = combineReducers({
  userReducer: userReducer
})

const rootReducer = combineReducers({
  // userReducer: userReducer,
  nftAppReducer: nftAppReducer
});

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk),
  // other store enhancers if any
));

export default store;
