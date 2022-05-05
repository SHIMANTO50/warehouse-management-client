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

    const handleDelivered = (id) => {
        let newQuantity = products.quantity - 1;
        const newProduct = { ...products, quantity: newQuantity }
        //copy all previous data if exist in product and setup new quantity 
        setProducts(newProduct);
        fetch(`http://localhost:5000/item/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
    }

    return (
        <divc className='d-flex align-items-center justify-content-center'>
            <div>
                <h2>Product Id: {products._id}</h2>
                <img className='img-fluid' src={products.img} alt="" />
                <h2>Product Name:{products.name}</h2>
                <p>Price: {products.price}</p>
                <p>Quantity: {products.quantity} kg</p>
                <p>Description: {products.description}</p>
                <p>SupplierName: {products.supplierName}</p>
                <div>
                    <button onClick={() => handleDelivered(products._id)} className='btn btn-info mt-3'>delivered</button>
                </div>
                <button onClick={handleInventory} className='btn btn-primary mt-3'>Manage Inventory</button>
            </div>

        </divc>
    );
};

export default SingleProductDetails;