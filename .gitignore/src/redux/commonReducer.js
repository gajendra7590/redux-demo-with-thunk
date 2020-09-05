import { combineReducers } from 'redux'; 
import { cakeReducer  } from "./cakes/cakeReducer";
import { iceCreamReducer  } from "./iceCream/iceCreamReducer";
import { articlesReducer } from './articles/articlesReducer'


const commonReducer = combineReducers({
    cake : cakeReducer,
    icecream : iceCreamReducer,
    articles : articlesReducer
});

export default commonReducer;


