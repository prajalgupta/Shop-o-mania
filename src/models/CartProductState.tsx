import { CartProductType } from "./CartProduct";

export type CartProductState = {
    cartItems: CartProductType[],
    error: string | null
};