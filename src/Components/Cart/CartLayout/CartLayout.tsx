import React, { Fragment } from 'react';
import { Button } from 'react-bootstrap';

const CartLayout: React.FC = () => {
    
    return (
        <Fragment>
            <h1>Your Cart </h1>
            <Button variant = "primary"> CANCEL </Button>
            <Button variant = "primary"> CONTINUE </Button>
        </Fragment>
    );
}

export default CartLayout;