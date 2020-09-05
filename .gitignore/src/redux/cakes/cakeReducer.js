import { BUY_CAKE  } from "../types";
const intiCakeState = {
    numOfCakes : 10
} 

export const cakeReducer = (state = intiCakeState,action) => { 
    switch(action.type) {
        case BUY_CAKE : return {
            ...state,
            numOfCakes : (state.numOfCakes - ( (action.payload.buyTotal)?action.payload.buyTotal:1 )  )
        }
        default : return state 
    } 
}

 