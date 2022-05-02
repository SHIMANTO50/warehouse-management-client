import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const SingleProductDetails = () => {
    const { id } = useParams();
    const [products, setProducts] = useState({});
    const navigate = useNavigate();
    const handleInventory = () => {
        navigate('/inventory');
    }
    useEffect(() => {
        const url = `http://localhost:5000/item/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <h2>Product Id: {products._id}</h2>
            <img className='img-fluid' src={products.img} alt="" />
            <h2>Product Name:{products.name}</h2>
            <p>Price: {products.price}</p>
            <p>Quantity: {products.quantity}</p>
            <p>Description: {products.description}</p>
            <p>SupplierName: {products.supplierName}</p>


            <button onClick={handleInventory} className='btn btn-primary mt-3'>Manage Inventory</button>

        </div>
    );
};

export default SingleProductDetails;