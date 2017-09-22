import React from 'react'
import Nav from './Nav.jsx'

class Background extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    return (
      <div className={this.props.backgroundType}>
        <Nav/>
        <br/>
        <div id="nameAndTitle">
          <h1>{this.props.heading}</h1>
        </div>
      </div>
    )
  }
}

export default Background