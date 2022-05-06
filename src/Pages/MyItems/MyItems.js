import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './MyItems.css';
import { useNavigate } from 'react-router-dom';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [myitems, setMyItems] = useState([]);
    const navigate = useNavigate();
    const handleAddMyItems = () => {
        navigate('/addmyitems');
    }
    useEffect(() => {
        const email = user.email;
        const url = `https://limitless-waters-59828.herokuapp.com/myitem?email=${email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMyItems(data))
    }, [])
    const handleDelete = (id) => {
        const proceed = window.confirm('Do you want to Delete?');
        if (proceed) {
            console.log('Deleting User id', id);
            const url = `https://limitless-waters-59828.herokuapp.com/myitem/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = myitems.filter(product => product._id !== id);
                    setMyItems(remaining);
                })
        }
    }
    return (
        <div className='myitem-height'>
            <h2 className='text-center text-primary'>My Items</h2>
            <h2 className='text-center'>Total Items Added:{myitems.length}</h2>
            <div className='text-center mb-3'>
                <button onClick={handleAddMyItems} className='btn btn-primary mt-2'>Add Items</button>
            </div>
            <div className="container product-grid">

                {
                    myitems.map(product =>
                        <div className='border-design p-5' key={product._id}>
                            <h5>Name:{product.prname}</h5>
                            <h5>Price:{product.prprice}</h5>
                            <p>Quantity: {product.prquantity} kg</p>
                            <p>Other Description: {product.prdescription}</p>
                            <p>SupplierName: {product.prsupplierName}</p>
                            <button onClick={() => handleDelete(product._id)} className='btn btn-danger mt-5'>Delete</button>
                        </div>


                    )
                }



            </div>

        </div>
    );
};

export default MyItems;