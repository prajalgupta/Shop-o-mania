import {CartProductState } from "../../models/CartProductState"
import { Action, ActionType } from "../actions/actionTypes"

const initialState: CartProductState = {
  products: [],
  error: null
}

const cartReducer = (
    state: CartProductState = initialState,
    action: ProductAction
  ): CartProductState => {
    
    switch (action.type) {
      case ActionType.ADD_PRODUCT:
        return {
            ...state,
            products: action.payload
        }
      case ActionType.REMOVE_PRODUCT:
        return {
            ...state,
            products: action.payload
        }
      default: return state;
  }
} 

export default cartReducer;