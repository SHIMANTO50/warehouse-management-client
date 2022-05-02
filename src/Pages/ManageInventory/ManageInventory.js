import React, { useEffect, useState } from 'react';
import Inventory from './Inventory/Inventory';

const ManageInventory = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <h2>Products: {products.length}</h2>
            <div className="row container">
                {
                    products.map(product => <Inventory key={product.id} product={product}></Inventory>)
                }
            </div>
        </div>
    );
};

export default ManageInventory;