import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetch('https://limitless-waters-59828.herokuapp.com/item')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const handleInventory = () => {
        navigate('/inventory');
    }

    return (
        <div>
            <h1 className='text-center text-primary mt-5'>Inventory items</h1>
            <div className="row container mx-auto">
                {
                    products.slice(0, 6).map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
            <div className='text-center'>
                <button onClick={handleInventory} className='btn btn-primary mt-3'>Manage Inventory</button>
            </div>
        </div>
    );
};

export default Products;