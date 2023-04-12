import { Product } from '../../models/Product';

export enum ActionType {
    ADD_PRODUCT = 'ADD_PRODUCT',
    REMOVE_PRODUCT = 'REMOVE_PRODUCT',
    START_FETCHING = 'START_FETCHING',
    SET_PRODUCTS = 'SET_PRODUCTS',
    SET_ERROR = 'SET_ERROR'
}

interface addProduct {
    type: ActionType.ADD_PRODUCT;
    payload: Product;
}

interface removeProduct {
    type: ActionType.REMOVE_PRODUCT;
    payload: Product;
}

interface startFetching {
    type: ActionType.START_FETCHING;
}

interface setProducts {
    type: ActionType.SET_PRODUCTS;
    payload: Product[];
}

interface setError {
    type: ActionType.SET_ERROR;
    payload: Error;
     
}

export type Action = addProduct | removeProduct | startFetching | setProducts | setError ;