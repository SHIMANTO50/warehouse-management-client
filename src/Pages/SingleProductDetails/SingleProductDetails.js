import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const SingleProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const handleInventory = () => {
        navigate('/inventory');
    }

    return (
        <div>
            <h2>Product Id: {id}</h2>
            <button onClick={handleInventory} className='btn btn-primary mt-3'>Manage Inventory</button>

        </div>
    );
};

export default SingleProductDetails;