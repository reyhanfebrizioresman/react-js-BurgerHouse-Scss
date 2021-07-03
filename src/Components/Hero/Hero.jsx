import React from 'react'
import './Hero.scss'
import hero from '../Images/banner.png'
const Hero = () => {
    return (
        <div className="container" id="home">
            <div className="wrapper">
            <h3>Its Great Time For A Good Taste Of Burger</h3>
                    <h1><span>BURGER</span> FOR<br/>WEEK</h1>
                    <div className="desc">Lorem ipsum dolor sit amet,</div>
                    <div className="button">
                        <a href="" className="header-btn">Order</a>
                    </div>
                </div>
            </div>
    )
}

export default Hero
