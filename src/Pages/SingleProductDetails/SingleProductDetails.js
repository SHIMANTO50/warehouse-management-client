import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleProductDetails = () => {
    const { id } = useParams();

    return (
        <div>
            <h2>Product Id: {id}</h2>

        </div>
    );
};

export default SingleProductDetails;