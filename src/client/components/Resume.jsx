import React from 'react'
import Background from './Background.jsx'
import resumePdf from '../pdfs/Jordan_Hoang_Resume.pdf'
import Footer from './Footer.jsx'

import { Grid, Row, Col } from 'react-bootstrap';

const Resume = () => {
  return (
    <div>
      <Background backgroundType={'resume'} heading={'RESUME'} subheading={'Skills, Experience, Education'} />
      <div className="resumeDownload">
        <a href={resumePdf} download="Jordan_Hoang_Resume">
          <h2 id="resumeLink">Download Resume</h2>
        </a>
      </div>
      <Grid>
        <hr/>
        <Row>
          <Col xs={6} md={4}>
            <h2>TECHNOLOGIES</h2>
          </Col>
          <Col xs={6} md={8}>
            <div className="resumeText">
              <h3>Strong</h3>
              <ul>
                <li>Javascript</li>
                <li>React.js</li>
                <li>Node.js</li>
                <li>Express</li>
                <li>HTML / CSS</li>
                <li>RESTful API</li>
                <li>Git</li>
                <li>ES2015</li>
              </ul>
              <hr/>
              <h3>Experienced</h3>
              <ul>
                <li>Redux</li>
                <li>AngularJS</li>
                <li>Webpack</li>
                <li>jQuery</li>
                <li>PostgreSQL</li>
              </ul>
            </div>
          </Col>
        </Row>
        <hr/>
        <Row>
          <Col xs={6} md={4}>
            <h2>APPLICATIONS</h2>
          </Col>
          <Col xs={6} md={8}>
            <div className="resumeText">
              <h3>Rentopia | Full Stack Software Engineer</h3>
              <h4>Web application that allows tenants and landlords to interact via payments, documents, and messaging</h4>
              <ul>
                <li>Implemented a credit card payment system to allow for seamless transactions between users</li>
                <li>Built and utilized a D3 donut graph to help users easily visualize their expenses</li>
                <li>Architected RESTful API routes using a Koa server that sent data to the PostgreSQL
                database</li>
              </ul>
            </div>
            <hr/>
            <div className="resumeText">
              <h3>Concreet Cal | Front End Software Engineer</h3>
              <h4>Web application that takes multiple users’ calendars and finds free times across all users</h4>
              <ul>
                <li>Formulated and implemented an algorithm to find free times across multiple users </li>
                <li>Architected routes to the Google Calendar API </li>
                <li>Designed the front end using React.js, HTML, and CSS while following UI best practices </li>
                <li>Utilized Scrum and Agile methodologies such as sprint planning and cross functionality </li>
              </ul>
            </div>
            <hr/>
            <div className="resumeText">
              <h3>workout.log() | Full Stack Software Engineer</h3>
              <h4>Web application that allows users to track daily caloric intake and output from diet and exercise</h4>
              <ul>
                <li>Designed and developed a MERN stack application</li>
                <li>Incorporated a MongoDB database to store users and logs</li>
                <li>Integrated API routes to allow users to search for foods from the Nutritionix database</li>
              </ul>
            </div>
          </Col>
        </Row>
        <hr/>
        <Row>
          <Col xs={6} md={4}>
            <h2>EDUCATION</h2>
          </Col>
          <Col xs={6} md={8}>
            <div>
              <h3 style={{"color" : "rgba(191, 87, 0, 1)"}}>The University of Texas at Austin, Class of 2017</h3>
              <h4>Bachelor of Science, Geology</h4>
              <h4>Elements of Computing Certificate</h4>
            </div>
            <hr/>
            <div>
              <h3>Hack Reactor, HRATX28</h3>
              <h4>Advanced Software Engineering Immersive</h4>
            </div>
          </Col>
        </Row>
      </Grid>
      <Footer/>
    </div>
  )  
}

export default Resume