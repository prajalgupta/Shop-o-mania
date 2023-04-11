import React from 'react';
import { CartProductType } from '../../models/CartProduct';

const AddProduct = (clickedItem: CartProductType) => {
    const isItemInCart = id.find(item => item.id === clickedItem.id);

    if (isItemInCart) {
        return item.map(item =>
        item.id === clickedItem.id
        );
      }
      
    return [ { ...clickedItem, amount: }];
    };

    
const RemoveProduct = (id: number) => {
        if (item.id === id) {}
  };