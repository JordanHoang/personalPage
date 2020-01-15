import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer navbar">
      <ul>
        <div className="footerContainer">
          <li><Link className="footerLink" to='/'>HOME</Link></li>
          <li><Link className="footerLink" to='/portfolio'>PORTFOLIO</Link></li>
          <li><Link className="footerLink" to='/resume'>RESUME</Link></li>
          <li><Link className="footerLink" to='/about'>ABOUT</Link></li>
          <li><Link className="footerLink" to='/contact'>CONTACT</Link></li>
        </div>
      </ul>
      <br/>
      <p>© 2019 Jordan Hoang. All rights reserved.</p>
      <Link className="footerLink" to='/credits' target="_blank">Credits</Link>
    </div>
  )

}

export default Footer