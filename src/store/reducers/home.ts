import { ProductAction } from "../../models/ProductAction";
import {CartProductState} from "../../models/CartProductState"
import { Action, ActionType } from "../actions/actionTypes";
import { ProductState } from "../../models/ProductState";

const initialState: ProductState = {
  products: [],
  error: null
}

const homeReducer = (
    state: ProductState = initialState,
    action: ProductAction
  ): ProductState => {
    
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