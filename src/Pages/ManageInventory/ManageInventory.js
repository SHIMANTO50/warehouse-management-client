import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Inventory from './Inventory/Inventory';

const ManageInventory = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetch('http://localhost:5000/item')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const handleAddProductNavigate = () => {
        navigate('/addproduct');
    }

    return (
        <div>
            <h2>Products: {products.length}</h2>
            <button onClick={handleAddProductNavigate} className='btn btn-primary ms-3 mt-5'>Add New Item</button>
            <div className="row container">
                {
                    products.map(product => <Inventory key={product._id} product={product}></Inventory>)
                }
            </div>
        </div>
    );
};

export default ManageInventory;