import ProductCard from "../ProductCard/ProductCard"
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../..';

const ProductList : React.FC = () => {
    
    const products = useSelector((state : RootState) =>  state.home.products);

    return (
        <div style={{width: '80%', display: 'flex', flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-evenly'}}>
                {products ? (
                    products.map(product => <ProductCard 
                        image={product.filename}
                        title={product.title}
                        type={product.type}
                        description={product.description}
                        price={product.price}
                        rating={product.rating}
                    />)
                ) : null}
            </div>
    );
}

export default ProductList;
