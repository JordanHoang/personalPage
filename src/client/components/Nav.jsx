import React from 'react'
import { Link } from 'react-router-dom'

class Nav extends React.Component {

  render() {
    return (
      <div className="navbar">
        <ul>
          <div className="links">
            <li><Link className="routeLinks" to='/'>HOME</Link></li>
            <li><Link className="routeLinks" to='/portfolio'>PORTFOLIO</Link></li>
            <li>RESUME</li>
            <li>ABOUT</li>
            <li id="contact"><Link className="routeLinks routeLinksContact" to='/contact'>CONTACT</Link></li>
          </div>
        </ul>
      </div>
    )
  }
}

export default Nav