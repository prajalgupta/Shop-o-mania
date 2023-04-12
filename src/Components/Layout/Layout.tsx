import React, { Fragment, useEffect } from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';
import { fetchProducts } from '../../store/actions/home';
import { useDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';

type Props = {
    children: React.ReactNode
}

const Layout : React.FC<Props> = ({children}) => {
    const dispatch :ThunkDispatch<{}, {}, any> = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    return (
        <Fragment>
            <NavigationBar></NavigationBar>
            <div style = {{ paddingTop: '80px', width: '100%', height: '100%', minHeight: '100vh', background: '#f7f5f5' }}>
                {children}
            </div>
        </Fragment>
    );
};

export default Layout;