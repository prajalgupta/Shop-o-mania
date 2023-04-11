import { ProductAction } from "../../models/ProductAction";
import {CartProductState} from "../../models/CartProductState"
import { Action, ActionType } from "../actions/actionTypes";

const initialState: CartProductState = {
  products: [],
  error: null
}

const homeReducer = (
    state: CartProductState = initialState,
    action: ProductAction
  ): CartProductState => {
    
    switch (action.type) {
      case ActionType.START_FETCHING:
        return {
            ...state,
            error: null
        }
      case ActionType.SET_PRODUCTS:
        return {
            ...state,
            products: action.payload
        }
      case ActionType.SET_ERROR:
        return {
            ...state,
            error: action.payload
        }
      default: return state;
  }
} 

export default homeReducer;