import React from 'react'
import Background from './Background.jsx'
import Timeline from './Timeline.jsx'
import PhotoGrid from './PhotoGrid.jsx'
import Footer from './Footer.jsx'

class About extends React.Component {

  render() {
    return (
      <div className="aboutContainer">
        <Background backgroundType={'about'} heading={'ABOUT'} subheading={'Some things about me!'}/>
        <Timeline />
        <div className="horizontalLine">
          <hr/>
        </div>
        <PhotoGrid/>
        <Footer/>
      </div>
    )
  }
}

export default About