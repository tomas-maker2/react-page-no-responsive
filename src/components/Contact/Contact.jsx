import React from 'react'
import './contact.css'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'
import {FaPinterestP} from 'react-icons/fa'


const Contact = () => {
  return (
    <div className="contact">
        <div className="wrapper">
            <span>BE IN TOUCH WITH US:</span>
            <div className="mail">
                <input type="text" placeholder='Enter your Email' />
                <button>JOIN US</button>
            </div>
            <div className="icons">
                <BsInstagram/>
                <BsTwitter/>
                <FaFacebookF/>
                <FaPinterestP/>
            </div>
        </div>
    </div>
  )
}

export default Contact