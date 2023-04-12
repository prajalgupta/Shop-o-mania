import React, { useState, Fragment, useEffect } from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';
import { Product } from '../../models/Product';
import { json } from 'stream/consumers';
import ProductCard from '../ProductCard/ProductCard';
import { fetchProducts } from '../../store/actions/home';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk'
import { ProductState } from '../../models/ProductState';
import ProductList from '../ProductList/ProductList';

// export const useAppDispatch = () => useAppDispatch<AppDispatch>();

type Props = {
    children: React.ReactNode
}

const Layout : React.FC<Props> = ({children}) => {

    // const [products, setProducts] = useState<Array<Product>>([]);
    const dispatch :ThunkDispatch<{}, {}, any> = useDispatch();
    
    // const error = useSelector(state => s);

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    
    return (
        <Fragment>
            <NavigationBar></NavigationBar>
            <div style={{paddingTop: '80px', width: '100%', height: '100vh', background: '#f7f5f5'}}>
                {children}
            </div>
        </Fragment>
    );
}

export default Layout;