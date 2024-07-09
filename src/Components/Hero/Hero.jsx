import React from 'react'
import './Hero.css'
import {Link} from 'react-router-dom'

import hero from '../assets/img1_hero.png'
import herro from '../assets/img2_hero.png'
import herrro from '../assets/img3_hero.png'
import arrow from '../assets/Arrow Right.png'

import product1 from '../assets/Product1.svg'
import product2 from '../assets/product2.svg'
import product3 from '../assets/product3.svg'
import product4 from '../assets/product4.svg'
import product5 from '../assets/product5.svg'
import product6 from '../assets/product6.svg'
import product7 from '../assets/product7.svg'
import product8 from '../assets/product8.svg'


const Hero = () => {
  return (
    <div className='hero'>
        <div className="left">
            <img src={hero} alt="" />
            <img src={herro} alt="" />
            <img src={herrro} alt="" />

        </div>
      <div className="right">
        <div className="f">
            <p>MAINTAIN YOUR STEEZ AND COMPOSURE</p>
        </div>
        <div className="s">
        <p>From backpacks to sneakers. These are the best in the market of wears to help you look fresh and smart</p>
        </div>
        <div className="t">
          <div className='men'> <button style={{background:'yellow'}}> <Link style={{textDecoration:'none'}} to='/Men'>Shop Men</Link> <img src={arrow} alt="" /></button></div>
          <div className='women'> <button style={{background:'yellow'}}><Link style={{textDecoration:'none'}} to='/Women'>Shop Women</Link><img src={arrow} alt="" /></button></div>
          <div className='kids'><button style={{background:'yellow'}}><Link style={{textDecoration:'none'}} to='/Kids'>Shop Kids</Link><img src={arrow} alt="" /></button></div>
        </div>

      </div>
      <div className="home">
      <div className="note">
        <div className='new'><p>New Arrivals</p></div>
        <div className='ret'><p className='no'>Retro Stock</p></div>
        <div className='best'><p className='no'>Best Sellers</p></div>
      </div>
      <div className='newp'>
        <img src={product1} alt="" />   
        <img src={product2} alt="" />   
        <img src={product3} alt="" />    
        <img src={product4} alt="" /> 
        </div>
    
        <div className="notee">
        <div className='ret'><p className='no'>New Arrivals</p></div>
        <div className='new'><p>Retro Stock</p></div>
        <div className='best'><p className='no'>Best Sellers</p></div>
      </div>
      <div className='newpp'>
        <img src={product1} alt="" />   
        <img src={product2} alt="" />   
        <img src={product3} alt="" />    
        <img src={product4} alt="" /> 
        </div>
        <div className="noteee">
        <div className='ret'><p className='no'>New Arrivals</p></div>
        <div className='best'><p className='no'>Retro Stock</p></div>
        <div className='new'><p >Best Sellers</p></div>
      </div>
      <div className='newppp'>
        <img src={product5} alt="" />   
        <img src={product6} alt="" />   
        <img src={product7} alt="" />    
        <img src={product8} alt="" /> 
        </div>
      </div>
    </div>
    
  );
}

export default Hero
