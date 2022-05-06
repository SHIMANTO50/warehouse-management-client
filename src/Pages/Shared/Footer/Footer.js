import React from 'react';
import './Footer.css';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='mt-3 bg-dark text-white'>
            <h3 className='text-center mt-3 tex-white pt-5'><small>Copyright &copy; {year}</small></h3>
            <div>
                <h5 className='text-center text-white pt-2'>Email: hasan@gmail.com</h5>
            </div>
            <div>
                <h5 className='text-center text-white pt-2 '>Contact No: +880123456789</h5>
            </div>
        </footer>
    );
};

export default Footer;