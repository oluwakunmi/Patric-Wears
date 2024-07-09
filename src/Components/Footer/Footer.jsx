import React from 'react';
import './Footer.css'
import newLetter from '../assets/NewlLetter.svg'
import foot from '../assets/foot.svg'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
        <img src={newLetter} alt="" />
      </div>
      <div className="down">
        <img src={foot} alt="" />
      </div>
    </div>
  );
}

export default Footer
