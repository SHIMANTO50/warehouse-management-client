import React from 'react';
import Banner from '../Banner/Banner';
import TopProducts from '../TopProducts/TopProducts';
import Products from './../Products/Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <TopProducts></TopProducts>

        </div>
    );
};

export default Home;