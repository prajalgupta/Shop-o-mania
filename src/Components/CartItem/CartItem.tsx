import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {Product} from '../../models/Product';
import { AddProduct, RemoveProduct} from '../../store/actions/cart';
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
  id: string,
  amount: number
};

const CartItem: React.FC<Props> = ({image, title, type, description, height, width, price, rating, id, amount}) => {

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
    <Card style = {{ width: '800px', height: '230px', margin: '30px', display: 'flex', flexDirection: 'row' }}>
        <Card.Img variant = 'top' src = {image} style = {{ height: '100%', width: '230px' }}/>
        <Card.Body style = {{ height: '100%', width: '80%' }}>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Card.Text>Price = {price}</Card.Text>
            <Card.Text> Quantity: 
            <Button variant = 'primary' style = {{ backgroundColor: 'black', color: 'white', margin:'10px' }} 
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(RemoveProduct(currentProduct));
              }}> - </Button>
              {amount}
              <Button variant = 'primary' style= {{ backgroundColor: 'black', color: 'white', margin:'10px' }} 
                onClick = { (e) => {
                  e.preventDefault();
                  dispatch(AddProduct(currentProduct));
              }}> + </Button> 
            </Card.Text>
        </Card.Body>
    </Card>
  )
};

export default CartItem;