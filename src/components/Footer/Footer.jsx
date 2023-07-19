import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Woman</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivalas</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident aut, eaque non veniam labore exercitationem beatae nam? Officiis quis, nisi amet quas sequi est optio nihil necessitatibus numquam perferendis voluptate atque in pariatur aspernatur a placeat odit quia, culpa nesciunt?</span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non, tempore! Cum corrupti assumenda deleniti fugiat quibusdam? Suscipit laudantium fugiat eum modi cumque quasi odio dolorum quas adipisci iste ex accusamus velit veniam maiores vel sunt doloremque, illo pariatur minima. Sed.</span>
        </div>
      </div>

      <div className="bottom">
        <div className="left">
          <span className="logo">Polis</span>
          <span className="copyright">Copygiht 2023</span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Footer