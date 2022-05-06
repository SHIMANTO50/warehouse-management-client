import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';

const AddMyItems = () => {
    const [user] = useAuthState(auth);
    const handleAddMyItem = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const prname = event.target.prname.value;
        const prprice = event.target.prprice.value;
        const prquantity = event.target.prquantity.value;
        const prdescription = event.target.prdescription.value;
        const prsupplierName = event.target.prsupplierName.value;
        const prstatus = event.target.prstatus.value;


        const product = { email, prname, prprice, prquantity, prdescription, prsupplierName, prstatus };

        //send data to server
        fetch('http://localhost:5000/myitem', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                event.target.reset();
            })

    }
    return (
        <div>
            <h2 className='text-center text-primary'>Add My Items</h2>
            <form onSubmit={handleAddMyItem} className='register-form'>
                <input type="email" name="email" value={user.email} id="" placeholder='User Email' />
                <input type="text" name="prname" id="" placeholder='product name' />
                <input type="text" name="prprice" id="" placeholder="price" />
                <input type="text" name="prquantity" id="" placeholder='quantity of product' />
                <input type="text" name="prdescription" id="" placeholder="description" />
                <input type="text" name="prsupplierName" id="" placeholder="supplier Name" />
                <input type="text" name="prstatus" id="" placeholder="status" />
                <input type="submit" value="Add my Item" />

            </form>
        </div>
    );
};

export default AddMyItems;