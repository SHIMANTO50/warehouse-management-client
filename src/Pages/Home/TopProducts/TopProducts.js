import React from 'react';
import rice from '../../../images/rice.jpg';
import dal from '../../../images/dal.jpg';
import salt from '../../../images/salt.jpg';
import oil from '../../../images/oil.jpg';

const TopProducts = () => {
    return (
        <div>
            <h2 className='text-center text-primary mt-5'>Top Products</h2>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-3">
                        <div class="card shadow" style={{ width: "18rem" }}>
                            <img src={rice} class="card-img-top img-fluid h-50" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Rice</h5>
                                <p class="card-text">Discount:10%</p>

                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div class="card h-100 shadow" style={{ width: "18rem" }}>
                            <img src={dal} class="card-img-top img-fluid h-50" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Dal</h5>
                                <p class="card-text">Discount:10%</p>

                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div class="card h-100 shadow" style={{ width: "18rem" }}>
                            <img src={salt} class="card-img-top img-fluid h-50" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Salt</h5>
                                <p class="card-text">Discount:10%</p>

                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div class="card h-100 shadow" style={{ width: "18rem" }}>
                            <img src={oil} class="card-img-top img-fluid h-50" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Oil</h5>
                                <p class="card-text">Discount:10%</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopProducts;