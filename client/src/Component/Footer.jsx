import React from 'react';
import '../css/Footer.js';

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='flex-row'>
        {/* left */}
        <div className='card1 px-1 py-1'>
          <div className='left'>
            <h5>Thank you for shopping</h5>
          </div>
        </div>
        
        {/* middle */}
        <div className="card1 px-1 py-1">
          <div className='middle'>
            <h3>CONTACT</h3>
            <p>123 Earth Avenue, Earth, Universe</p>
            <p>sliceofpizza@sliceofpizza.com</p>
            <p>123-456-7890</p>
          </div>
        </div>
        
        {/* right */}
        <div className="card1 px-1 py-1">
          <div className='right'>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
