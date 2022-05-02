import React from 'react';

const Register = () => {
    return (
        <div>
            <h2>This is Register Page</h2>
            <form>
                <input type="text" name="name" id="" placeholder='Your Name' />
                <input type="email" name="email" id="" placeholder='Your Email' required />
                <input type="password" name="password" id="" placeholder='Your Password' required />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;