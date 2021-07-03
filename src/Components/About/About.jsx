import React from 'react'
import './About.scss'
import img from '../Images/about.png'
const About = () => {
    return (
        <div className="about-container" id="about">
            <div className="wrapper">
                <div className="left">
                    <h1>upcoming<br/> event</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ullam quibusdam, enim corporis, exercitationem doloribus sapiente perspiciatis velit et repellat delectus molestiae voluptate.</p>
                    <a href="" className="btn">Read More</a>
                </div>
                <div className="right">
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    )
}

export default About
