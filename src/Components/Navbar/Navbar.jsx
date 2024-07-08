import React from 'react'
import './Navbar.css'

import person from "../assets/Personperson_icon.png"
import heart from "../assets/Heart_icon.png"
import cart from "../assets/Cartcart_icon.png"

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='before-hero'>
        <p>FREE SHIPMENT IF YOU PURCHASE TODAY</p>
      </div>
      <div className="nav-bar">
        <div className="logo">
        <p>Patrik Wears</p>
        </div>
        <div className="nav">
        <ul>
          <li> <p>Men</p></li>
          <li><p>Women</p></li>
          <li><p>Kids</p></li>
          <div className='fg'>
          <div className="flash"><p>Flash</p></div>
          <div className="gbe"><p>Gbanjo</p></div>
          </div>
        </ul>
        </div>
        <div className="nav-search-cart">
        <button>Search </button>
        <img src={person} alt="" />
        <img src={heart} alt="" />
        <img src={cart} alt="" />
       </div>
       
      </div>
      <div className="below">
        <p>SAVE UP TO 60% WHEN YOU PURCHASE FROM OUR PATRIKLUB</p>
       </div>
       </div>
       
  )
}

export default Navbar