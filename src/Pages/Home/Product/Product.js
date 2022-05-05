import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, name, price, quantity, description, supplierName, img, status } = product;
    const navigate = useNavigate();
    const navigateToProductDetail = (id) => {
        navigate(`/inventory/${id}`)
    }

    return (
        <div className='col-md-6 col-lg-4 col- gy-3'>
            <div className="card h-100" style={{ width: "18rem" }}>
                <img src={img} className="card-img-top img-fluid w-100 h-50" alt="..." />
                <div className="card-body">
                    <p>Name: {name}</p>
                    <p>Price: {price}</p>
                    <p>Quantity: {quantity} kg</p>
                    <p>Description: {description}</p>
                    <p>SupplierName: {supplierName}</p>
                    <p>Status: {status}</p>
                    <button onClick={() => navigateToProductDetail(_id)} className='btn btn-primary'>Update</button>
                </div>

            </div>
        </div>
    );
};

export default Product;