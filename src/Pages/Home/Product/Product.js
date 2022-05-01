import React from 'react';

const Product = ({ product }) => {
    const { name, price, quantity, description, supplierName, img } = product;
    return (
        // <div>
        //     <img src={img} alt="" />
        //     <p>Name:{name}</p>
        //     <p>Price:{price}</p>
        //     <p>Quantity:{quantity}</p>
        //     <p>Description:{description}</p>
        //     <p>SupplierName:{supplierName}</p>
        //     <button className='btn btn-primary'>Update</button>
        // </div>
        <div className="card" style={{ width: "18rem" }}>
            <img src={img} className="card-img-top img-fluid" alt="..." />
            <div className="card-body">
                <p>Name:{name}</p>
                <p>Price:{price}</p>
                <p>Quantity:{quantity}</p>
                <p>Description:{description}</p>
                <p>SupplierName:{supplierName}</p>
                <button className='btn btn-primary'>Update</button>
            </div>
        </div>
    );
};

export default Product;