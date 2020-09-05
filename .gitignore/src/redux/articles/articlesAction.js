import axios from 'axios';
import {
  FETCH_ARTICLES_SUCCESS,
  FETCH_ARTICLES_REQUEST,
  FETCH_ARTICLES_ERROR,
} from "../types";

export const fetchingArtRequest = () => {
    return {
        type: FETCH_ARTICLES_REQUEST 
    };
};

const fetchingArtSuccess = payload => {
    return {
        type: FETCH_ARTICLES_SUCCESS,
        payload: payload,
    };
};

const fetchingArtError = error => {
    return {
        type: FETCH_ARTICLES_ERROR,
        payload: error,
    };
}; 

export const fetchingArtcles = (payload) => {
    return (dispatch) => {
        dispatch(fetchingArtRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then( response => {
            const user = response.data; 
            dispatch(fetchingArtSuccess(user))
        })
        .catch( error => {
            const errorMsg = error.message;
            dispatch(fetchingArtError(errorMsg))
        });
    }
}; 
 