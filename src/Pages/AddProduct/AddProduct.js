import React from 'react';
import './AddProduct.css';

const AddProduct = () => {
    const handleAddProduct = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const description = event.target.description.value;
        const supplierName = event.target.supplierName.value;
        const status = event.target.status.value;
        const img = event.target.img.value;

        const product = { name, price, quantity, description, supplierName, status, img };

        //send data to server
        fetch('http://localhost:5000/item', {
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
            <h2 className='text-center text-primary'>Add New Product</h2>
            <form onSubmit={handleAddProduct} className='register-form'>

                <input type="text" name="name" id="" placeholder='product name' />
                <input type="text" name="price" id="" placeholder="price" />
                <input type="text" name="quantity" id="" placeholder='quantity of product' />
                <input type="text" name="description" id="" placeholder="description" />
                <input type="text" name="supplierName" id="" placeholder="supplier Name" />
                <input type="text" name="status" id="" placeholder="status" />
                <input type="text" name="img" id="" placeholder="Image url" />
                <input type="submit" value="Add Product" />

            </form>
        </div>
    );
};

export default AddProduct;