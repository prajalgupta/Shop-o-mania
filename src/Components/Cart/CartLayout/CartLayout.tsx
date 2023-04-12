import React, { Fragment } from 'react';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { RootState } from '../../..';
import CartItem from '../CartItem/CartItem';

const CartLayout: React.FC = () => {
    
    const cartItems = useSelector((state : RootState) =>  state.cart.cartItems);

    return (
        <Fragment>
            <h1>Your Cart </h1>
            {cartItems ? (
                cartItems.map(cartItem => <CartItem
                    title = {cartItem.title} 
                    type = {cartItem.type}
                    description = {cartItem.description}
                    image = {cartItem.filename}
                    height = {cartItem.height}
                    width = {cartItem.width}
                    price = {cartItem.price}
                    rating = {cartItem.rating}
                    id = {cartItem.id}
                    amount = {cartItem.amount}
                    key={cartItem.id}
                />)
            ) : null}
            <Button variant = "primary"> CANCEL </Button>
            <Button variant = "primary"> CONTINUE </Button>
        </Fragment>
    );
}

export default CartLayout;