import React from 'react'
import './Hero.css'
import hero from '../assets/img1_hero.png'
import herro from '../assets/img2_hero.png'
import herrro from '../assets/img3_hero.png'

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
        <div className="t"></div>

      </div>
    </div>
  );
}

export default Hero
