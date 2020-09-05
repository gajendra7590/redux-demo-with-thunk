import { BUY_CAKE } from "../types";
export const buyCake = ( payload ) => {
    return {
        type : BUY_CAKE,
        payload : payload
    } 
} 