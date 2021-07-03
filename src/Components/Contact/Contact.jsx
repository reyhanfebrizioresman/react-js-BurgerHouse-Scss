import React from 'react'
import './Contact.scss'
const Contact = () => {
    return (
        <div className="contact-container" id="contact">
            <h1>BOOK YOUR TABLE</h1>
            <div className="form-group">
                <input type="text" placeholder="Full Name" />
                <input type="email" placeholder="Type Your Email" />
                <textarea name="" placeholder="write here......."></textarea>
                <a href="" className="btn">Book</a>
            </div>
        </div>
    )
}

export default Contact
