import React, { useState } from 'react'
import './Navbar.css'

import person from "../assets/Personperson_icon.png"
import heart from "../assets/Heart_icon.png"
import cart from "../assets/Cartcart_icon.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
 
    const [menu,setMenu] = useState("Shop");
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
        <li onClick={()=>{setMenu("Men")}}> <p><Link style={{textDecoration:'none'}} to='/Men'>Men</Link>{menu==="Men"?<hr/>:<></>}</p></li>
          <li onClick={()=>{setMenu("Women")}}><p><Link style={{textDecoration:'none'}} to='/Women'>Women</Link>{menu==="Wowen"?<hr/>:<></>}</p></li>
          <li onClick={()=>{setMenu("Kids")}}><p><Link style={{textDecoration:'none'}} to='/Kids'>Kids</Link> {menu==="Kids"?<hr/>:<></>}</p></li> 
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