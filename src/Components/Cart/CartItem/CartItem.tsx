import { Fragment } from "react";
import ProductList from "../../ProductList/ProductList";
import Card from 'react-bootstrap/Card';

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

  return (
    <Card style={{ width: '900px', height: '200px', margin: '10px' }}>
        <Card.Img variant="top" src = {image} style={{height: '80%', width: '30%'}}/>
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
                {description}
            </Card.Text>
        </Card.Body>
    </Card>
  );
}

export default CartItem;