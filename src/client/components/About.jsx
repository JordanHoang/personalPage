import React from 'react'
import Background from './Background.jsx'
import Timeline from './Timeline.jsx'

class About extends React.Component {

  render() {
    return (
      <div>
        <Background backgroundType={'about'} heading={'ABOUT'} subheading={'Some things about me!'}/>
        <Timeline />
        <hr/>
      </div>
    )
  }
}

export default About