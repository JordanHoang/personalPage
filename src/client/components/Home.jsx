import React from 'react'
import Background from './Background.jsx'
import reactLogo from '../images/react.svg'
import jsLogo from '../images/javascript.svg'
import nodeLogo from '../images/nodejs.svg'
import pgLogo from '../images/postgresql.svg'
import reduxLogo from '../images/redux.svg'
import gitLogo from '../images/git-icon.svg'

class Home extends React.Component {

  render() {
    return(
      <div>
        <Background backgroundType={'home'} heading={'JORDAN HOANG'} subheading={'Software Engineer'}/>
        <div className="homeContainer">
          <div id="personalNarrative">
            <p>
              Hi! I’m a software engineer with strong experience in JavaScript and a passion for building web applications. I’m comfortable working with the full stack, but I truly love building beautiful user experiences and interfaces with my knowledge of modern front end frameworks.
            </p>
          </div>
          <hr/>
          <div id="technologies">
            <h3>Technologies I've worked with: </h3>
            <div className="technologyLogos">
              <a target="_blank" href="https://www.javascript.com/"><img src={jsLogo} /></a>
              <a target="_blank" href="https://facebook.github.io/react/"><img src={reactLogo} /></a>
              <a target="_blank" href="http://redux.js.org/"><img src={reduxLogo} /></a>
              <a target="_blank" href="https://nodejs.org/en/"><img src={nodeLogo} /></a>
              <a target="_blank" href="https://www.postgresql.org/"><img src={pgLogo} /></a>
              <a target="_blank" href="https://git-scm.com/"><img src={gitLogo} /></a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home