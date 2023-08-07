import React from 'react'
import './navbar.css'
import {AiOutlineArrowDown} from 'react-icons/ai'
import {Link} from 'react-router-dom'


const Navbar = () => {

  

  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/img/en.png" alt="" />
            <AiOutlineArrowDown/>
          </div>
          <div className="item">
            <span>USD</span>
            <AiOutlineArrowDown/>
          </div>
          <div className="item gap">
            <Link className='link' to={"products"}>Woman</Link>
            <Link className='link' to={"products"}>Men</Link>
            <Link className='link' to={"products"}>Children</Link>
          </div>
        </div>
        <div className="center">
          <Link className='link' to={"/"}>Polis</Link>
        </div>
        <div className="right">

        <div className="item">
          <Link className='link' to={"/products"}>Store</Link>
        </div>
        <div className="item">
          <Link className='link' to={"/cart"}>Cart</Link>
        </div>
        <div className="item">
          <Link className='link' to={"/"}>Contact</Link>
        </div>
        
        

       

        </div>
      </div>
    </div>
  )
}

export default Navbar