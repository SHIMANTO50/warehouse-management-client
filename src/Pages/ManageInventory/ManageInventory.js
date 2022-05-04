import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
            <h2>Products: {products.length}</h2>
            <button onClick={handleAddProductNavigate} className='btn btn-primary ms-3 mt-5 mb-5'>Add New Item</button>
            <div className="container">

                {
                    products.map(product =>
                        <div key={products._id}>
                            <h5>Name:{product.name}</h5>
                            <h5>Price:{product.price}</h5>
                            <button onClick={() => handleDelete(product._id)} className='btn btn-danger mt-5'>Delete</button>
                        </div>


                    )
                }



            </div>
        </div>
    );
};

export default ManageInventory;