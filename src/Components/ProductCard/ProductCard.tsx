import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

type Props = {
    image: string,
    title: string,
    type: string,
    description: string,
    price: number,
    rating: number,
};

const ProductCard : React.FC<Props> = ({image, title, type, description, price, rating}) => {
    return (
        <Card style={{ width: '300px', height: '450px', margin: '10px' }}>
            <Card.Img variant="top" src = {image} style={{height: '60%', width: '95%'}}/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Button variant="primary">Add to Cart</Button>
            </Card.Body>
        </Card>
    );
}

export default ProductCard;
