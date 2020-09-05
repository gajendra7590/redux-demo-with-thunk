import {
    FETCH_ARTICLES_SUCCESS,
    FETCH_ARTICLES_REQUEST,
    FETCH_ARTICLES_ERROR,
  } from "../types";

const intiArtlicleState = {
    loader : false,
    data : [],
    error : ''
} 

export const articlesReducer = (state = intiArtlicleState,action) => { 
    switch(action.type) {
        case FETCH_ARTICLES_REQUEST : return {
            ...state,
            data : [],
            loader:true
        }
        case FETCH_ARTICLES_SUCCESS : return {
            ...state,
            loader : false,
            data : action.payload,
            error : ''
        }
        case FETCH_ARTICLES_ERROR : return {
            ...state,
            loader : false,
            data : [],
            error : action.payload
        }
        default : return state 
    } 
}

 