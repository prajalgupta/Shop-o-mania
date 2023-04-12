import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {Product} from '../../models/Product';
import { AddProduct } from '../../store/actions/cart';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

type Props = {
    title: string,
    type: string,
    description: string,
    image: string,
    height: number,
    width: number,
    price: number,
    rating: number,
    id: string
};

const ProductCard : React.FC<Props> = ({ image, title, type, description, height, width, price, rating, id }) => {

    const currentProduct : Product = {
        title: title, 
        filename: image, 
        type: type, 
        description: description, 
        height: height,
        width: width,
        price: price,
        rating: rating,
        id: id
    };

    const dispatch :ThunkDispatch<{}, {}, any> = useDispatch();

    return (
        <Card style={{ width: '300px', height: '450px', padding: '10px', marginBottom: '20px'}}>
            <Card.Img variant = 'top' src = {image} style = {{ height: '250px', width: '100%'}}/>
            <Card.Body style = {{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Card.Title>{title}</Card.Title>
                <Card.Text style = {{ marginBottom: '0px'}}>Price: Rs {price}</Card.Text>
                <Card.Text style = {{ marginBottom: '15px'}}>Rating: {rating}</Card.Text>
                <Button variant = 'primary' onClick = { (e) => {
                    e.preventDefault();
                    dispatch(AddProduct(currentProduct));
                }}>
                Add to Cart
                </Button>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;
