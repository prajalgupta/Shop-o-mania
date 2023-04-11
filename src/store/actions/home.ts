import {Dispatch} from 'redux';
import { Product } from "../../models/Product"
import { Action, ActionType } from "./actionTypes"
import { json } from 'stream/consumers';
import { error } from 'console';
import { ProductState } from '../../models/ProductState';

/*export const startFetch = () => {
  return {
      type: ActionType.START_FETCHING
  }
}

export const setProducts = (products:Product[]) => {
  return {
      type: ActionType.SET_PRODUCTS,
      products:products
  }
}

export const setError = (error:string) => {
  return {
      type: ActionType.SET_ERROR,
      error: error
  }
}*/

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
}

