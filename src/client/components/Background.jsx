import React from 'react'
import Nav from './Nav.jsx'

class Background extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <div className='background' id={this.props.backgroundType}>
        <Nav/>
        <br/>
        <div id="nameAndTitle">
          <h1 className="heading">{this.props.heading}</h1>
          <h3 className="subheading">{this.props.subheading}</h3>
        </div>
      </div>
    )
  }
}

export default Background