import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ManageInventory.css'

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
    const handleDelete = (id) => {
        const proceed = window.confirm('Do you want to Delete?');
        if (proceed) {
            console.log('Deleting User id', id);
            const url = `http://localhost:5000/item/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining);
                })
        }
    }

    return (
        <div>
            <h2 className='text-center text-primary'>Manage Inventory</h2>
            <h2 className='text-center'>Total Products: {products.length}</h2>
            <div className='text-center'>
                <button onClick={handleAddProductNavigate} className='btn btn-primary mt-5 mb-5'>Add New Item</button>
            </div>
            <div className="container product-grid">

                {
                    products.map(product =>
                        <div className='border-design p-5' key={products._id}>
                            <h5>Name:{product.name}</h5>
                            <h5>Price:{product.price}</h5>
                            <p>Quantity: {product.quantity} kg</p>
                            <p>Other Description: {product.description}</p>
                            <p>SupplierName: {product.supplierName}</p>
                            <button onClick={() => handleDelete(product._id)} className='btn btn-danger mt-5'>Delete</button>
                        </div>


                    )
                }



            </div>
        </div>
    );
};

export default ManageInventory;