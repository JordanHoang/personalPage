import React from 'react'
import Background from './Background.jsx'
import resumePdf from '../pdfs/Jordan_Hoang_Resume.pdf'
import downloadIcon from '../images/download-arrow.png'

const Resume = () => {

  return (
    <div>
      <Background backgroundType={'resume'} heading={'RESUME'} subheading={'Skills, Experience, Education'} />
      <div className="resumeContainer">
        <div className="resumeDownload">
          <a href={resumePdf} download="Jordan_Hoang_Resume">
            <h2 id="resumeLink">Download Resume</h2>
          </a>
        </div>
        <div className="resumeSection">
          <h3>NAME</h3>
          <div>
            <h4>Jordan Hoang</h4>
            <div className="clearfix"></div>
          </div>
        </div>
        <hr/>
        <div>
          <h3>ADDRESS</h3>
          <div>
            <h4>Austin, TX</h4>
          </div>
        </div>
        <hr/>
        <div>
          <h3>SKILLS</h3>
          <div>
            <h4>Javascript, React, HTML, CSS, Node.js, Express, Redux, SQL, NoSQL</h4>
          </div>
        </div>
        <hr/>
        <div>
          <h3>APPLICATIONS</h3>
          <div>
            <h4>Rentopia</h4>
            <h4>Concreet Cal</h4>
            <h4>Lifetime Capsule</h4>
            <h4>workout.log()</h4>
          </div>
        </div>
        <hr/>
        <div>
          <h3>EDUCATION</h3>
          <div>
            <h4>The University of Texas at Austin, B.S. in Geology, 2013-2017</h4>
            <h4>Hack Reactor, Advanced Software Engineering Immersive, 2017</h4>
          </div>
        </div>
        <hr/>
      </div>
    </div>
  )
}

export default Resume