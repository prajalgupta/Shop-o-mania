import React, {Component} from 'react';
import Layout from './Components/Layout/Layout';
import {Routes, Route, Link } from "react-router-dom";
import ProductList from './Components/ProductList/ProductList';
import CartLayout from './Components/Cart/CartLayout/CartLayout';

const App = () => {

  return (
    <div>
      <Layout>
        <Routes>
          <Route path = '/' Component = {ProductList}/>
          <Route path = '/cart' Component = {CartLayout} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
