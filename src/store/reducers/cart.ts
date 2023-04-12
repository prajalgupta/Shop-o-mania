import { CartProductState } from '../../models/CartProductState';
import { ProductAction } from '../../models/ProductAction';
import { ActionType } from '../actions/actionTypes';

const initialState: CartProductState = {
  cartItems: [],
  error: null
}

const cartReducer = (
    state: CartProductState = initialState,
    action: ProductAction
  ): CartProductState => {
    
    switch (action.type) {
      case ActionType.ADD_PRODUCT: {
        
        const cartItemsCopy = [...state.cartItems];
        let alreadyInCart : boolean = false;
        cartItemsCopy.map(item => {
          if(item.id == action.payload.id) {
            item.amount += 1;
            alreadyInCart = true;
          }
        });
        if (!alreadyInCart) {
          cartItemsCopy.push({ ...action.payload, amount: 1 });
        }
        return {
          ...state,
          cartItems: cartItemsCopy
        }
        
      }

      case ActionType.REMOVE_PRODUCT: {

        const cartItemsCopy2 = [...state.cartItems];
        cartItemsCopy2.forEach((item, index) => {
        if (item.id === action.payload.id) {
          if (item.amount! > 1) {
            item.amount! -= 1;
          } else {
            cartItemsCopy2.splice(index, 1);
          }}
        });
        return {
          ...state,
          cartItems: cartItemsCopy2
        }
      }

      default: return state;
  }};

export default cartReducer;