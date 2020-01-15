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
                <li>React</li>
                <li>Redux</li>
                <li>HTML / CSS</li>
                <li>RESTful API</li>
                <li>Git</li>
                <li>ES2015+</li>
              </ul>
              <hr/>
              <h3>Experienced</h3>
              <ul>
                <li>Sass</li>
                <li>jQuery</li>
                <li>Webpack</li>
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
              <h3>Modern Forms Fan Tool |  Software Developer</h3>
              <h4>Desktop application that is used across multiple teams to assist with their needs</h4>
              <ul>
                <li>Utilized Electron to develop an application that could be used by both Windows and Mac operating systems</li>
                <li>Implemented and used the AWS SDK for Javascript in Node.js to communicate with our devices and data in the cloud</li>
              </ul>
            </div>
            <div className="resumeText">
              <h3>Centerscape 2.0 | Junior Software Developer</h3>
              <h4>Enterprise web application that allows customers to track and manage their data center assets throughout the asset’s life cycle</h4>
              <ul>
                <li>Refactored the React Data Grid library to fit requirements from Product Management and UX/UI, including writing custom logic for pagination, sorting, and filtering using our API</li>
                <li>Built a dynamic form builder function utilizing our existing API that worked with the Redux Form API</li>
                <li>Created abstracted, reusable components that could be utilized differently throughout the application</li>
              </ul>
            </div>
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
