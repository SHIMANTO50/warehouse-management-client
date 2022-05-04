import React from 'react';
import { useNavigate } from 'react-router-dom';

const Inventory = ({ product }) => {
    const { _id, name, price, quantity, description, supplierName, img, status } = product;

    const handleDelete = (id) => {
        const proceed = window.confirm('Do you want to Delete?');
        if (proceed) {
            console.log('Deleting User id', id);
        }
    }
    return (

        <div className='col-md-6 col-lg-4 col- gy-3'>
            <div className="card h-100" style={{ width: "18rem" }}>
                <img src={img} className="card-img-top img-fluid w-100 h-50" alt="..." />
                <div className="card-body">
                    <p>Name: {name}</p>
                    <p>Price: {price}</p>
                    <p>Quantity: {quantity}</p>
                    <p>Description: {description}</p>
                    <p>SupplierName: {supplierName}</p>
                    <p>SupplierName: {status}</p>
                    <button onClick={() => handleDelete(_id)} className='btn btn-danger mt-5'>Delete</button>
                </div>
            </div>
        </div>

    );
};

export default Inventory;