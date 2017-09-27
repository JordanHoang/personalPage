import React from 'react'
import Background from './Background.jsx'
import Footer from './Footer.jsx'
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
          <div className="technologies">
            <h3>Technologies I enjoy building with: </h3>
            <div className="technologyLogos">
              <a target="_blank" href="https://www.javascript.com/"><img src={jsLogo} /></a>
              <a target="_blank" href="https://facebook.github.io/react/"><img src={reactLogo} /></a>
              <a target="_blank" href="http://redux.js.org/"><img src={reduxLogo} /></a>
              <a target="_blank" href="https://nodejs.org/en/"><img src={nodeLogo} /></a>
              <a target="_blank" href="https://www.postgresql.org/"><img src={pgLogo} /></a>
              <a target="_blank" href="https://git-scm.com/"><img src={gitLogo} /></a>
            </div>
          </div>
          <hr/>
          <div>
            <p>
              I am currently looking for a Software Engineering position at a great company that would allow me to use my skills, experience, and passion to help them build useful, amazing applications.
            </p>
          </div>
          <hr/>
          <div className="technologies">
            <h3>This website was built primarily using: </h3>
              <h4>React + React Router | Node.js / Express | Webpack | React-Bootstrap</h4>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default Home