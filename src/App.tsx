import Layout from './Components/Layout/Layout';
import {Routes, Route } from "react-router-dom";
import CartLayout from './containers/CartLayout/CartLayout';
import HomeLayout from './containers/HomeLayout/HomeLayout';

const App = () => {

  return (
    <div>
      <Layout>
        <Routes>
          <Route path = '/' Component = {HomeLayout}/>
          <Route path = '/cart' Component = {CartLayout} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
