import React from 'react';

const Inventory = ({ product }) => {
    const { name, price, quantity, description, supplierName, img } = product;
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
                    <button className='btn btn-primary'>Update</button>
                </div>
            </div>
        </div>
    );
};

export default Inventory;