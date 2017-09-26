import React from 'react'
import Background from './Background.jsx'

class Home extends React.Component {

  render() {
    return(
      <div>
        <Background backgroundType={'home'} heading={'JORDAN HOANG'} subheading={'Software Engineer'}/>
        <div className="personalNarrative">
          <p>
            Hi! I’m a software engineer with strong experience in JavaScript and a passion for building web applications. I’m comfortable working with the full stack, but I truly love building beautiful user experiences and interfaces with my knowledge of modern front end frameworks.
          </p>
        </div>
      </div>
    )
  }
}

export default Home