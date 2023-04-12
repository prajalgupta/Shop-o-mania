import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { RootState } from '../..';
import CartItem from '../../Components/CartItem/CartItem';
import { CartProductType } from '../../models/CartProduct';

const CartLayout: React.FC = () => {
    
    const cartItems = useSelector((state : RootState) =>  state.cart.cartItems);
    
    const getTotalPrice = (cartItems : CartProductType[]) : number => {

        let totalPrice : number = 0;
        cartItems.map(cartItem => {
            totalPrice += cartItem.price * cartItem.quantity;
        });
        return totalPrice;
    }

    return (
        <div>
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
                    amount = {cartItem.quantity}
                    key={cartItem.id}
                />)
            ) : null}
            <h5 style={ {marginLeft: '27px'} }>Total Amount : {getTotalPrice(cartItems).toFixed(2)}</h5>
            <Button variant = 'primary' style={ {marginLeft: '27px', marginTop: '10px', marginBottom: '20px'} }> PROCEED TO BUY </Button>
        </div>
    );
};

export default CartLayout;