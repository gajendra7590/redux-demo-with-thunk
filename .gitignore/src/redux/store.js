import {createStore,applyMiddleware } from 'redux'; 
import logger from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';


//custom imports
import commonReducer from './commonReducer';


const store = createStore(commonReducer, composeWithDevTools(applyMiddleware(logger,thunk)) );
export default store;