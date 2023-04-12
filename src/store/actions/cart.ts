import { Dispatch } from 'react';
import { Product } from '../../models/Product';
import { Action, ActionType } from './actionTypes';

export const AddProduct = (clickedItem: Product) => {
  return (dispatch : Dispatch<Action>) => {
    dispatch({
      type: ActionType.ADD_PRODUCT,
      payload: clickedItem
    });
  }
};

export const RemoveProduct = (clickedItem: Product) => {
  return (dispatch : Dispatch<Action>) => {
    dispatch({
      type: ActionType.REMOVE_PRODUCT,
      payload: clickedItem
    });
  }
};