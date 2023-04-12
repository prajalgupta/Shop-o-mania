import {Dispatch} from 'redux';
import { Action, ActionType } from './actionTypes';

export const fetchProducts = () => {
  return async (dispatch : Dispatch<Action>) => {
    dispatch({
      type: ActionType.START_FETCHING
    });

    fetch('https://api4286.s3.ap-south-1.amazonaws.com/products.json')
    .then(response =>  response.json())
    .then(json => dispatch({
      type: ActionType.SET_PRODUCTS,
      payload : json
    }))
    .then(res => console.log(res))
    .catch(err => dispatch({
      type: ActionType.SET_ERROR,
      payload : err
    }));
 }
};

