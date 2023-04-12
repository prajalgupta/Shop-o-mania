import { CartProductType } from "./CartProduct";
import { Product } from "./Product";

export type CartProductState = {
    cartItems: CartProductType[],
    error: string | null
};