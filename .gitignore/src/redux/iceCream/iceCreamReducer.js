import { BUY_ICECREAM } from '../types';

const initIceState = {
    numOfIceCreams : 20
}

export const iceCreamReducer = (state = initIceState,action) => { 
    switch(action.type) {
        case BUY_ICECREAM : return {
            ...state,
            numOfIceCreams : (state.numOfIceCreams - 1)
        }
        default : return state 
    } 
}