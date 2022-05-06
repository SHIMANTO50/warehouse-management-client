import React from 'react';
import stock from '../../../images/stockphoto.jpg';

const Grocery = () => {
    return (
        <div>
            <h1 className='text-center text-primary mt-5'>Our Services</h1>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-6 mt-5">
                        <h1>Discover New Amazing</h1>
                        <h1>Grocery Deals</h1>
                        <p>We will provide you the best Product. We provide delivery within 30 min.</p>
                        <button className='btn btn-primary'>Know More</button>
                    </div>

                    <div className="col-md-6">
                        <img className='img-fluid' src={stock} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Grocery;