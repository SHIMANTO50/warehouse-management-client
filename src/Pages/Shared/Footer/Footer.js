import React from 'react';
import './Footer.css';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center bg-dark mt-5'>
            <p><small className='text-white'>copyright &copy; {year}</small></p>
        </footer>
    );
};

export default Footer;