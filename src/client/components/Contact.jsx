import React from 'react'
import Background from './Background.jsx'
import { Grid, Row, Col } from 'react-bootstrap';
import github from '../images/github-sign.png'
import linkedIn from '../images/linkedin-logo.png'
import facebook from '../images/facebook-logo.png'
import instagram from '../images/instagram-logo.png'

class Contact extends React.Component {

  render() {
    return (
      <div>
        <Background backgroundType={'contact'} heading={'CONTACT'} subheading={'Feel free to reach out to me with any questions'} />
        <Grid>
          <Row>
            <Col xs={12} md={6}>
              <h1>Contact me</h1>
              <p>Feel free to reach out to me with any questions!</p>
              <p>I'd love to talk in person or on the phone about my skills and qualifications.</p>
              <p>jordan.n.hoang@gmail.com</p>
              <p>832.803.8853</p>
            </Col>
            <Col xs={12} md={6}>
              <h1>Send me a message</h1>
              <form id="messageForm">
                <label>First Name</label><input name="firstName"></input>
                <label>Last Name</label><input name="lastName"></input>
                <br/>
                <label>Email Address</label><input name="email"></input>
                <br/>
                <label>Message</label><textarea name="message"></textarea>
                <button type="submit">Submit</button>
              </form>
            </Col>
          </Row>
          <hr/>
          <Row>
            <Col className='socialMediaContainer' xs={12} md={12}>
              <h1>Social Media</h1>
              <div className="socialMedia">
                <a href="https://github.com/JordanHoang" target="_blank"><img src={github} /></a>
                <a href="https://www.linkedin.com/in/jordan-hoang/"><img src={linkedIn} /></a>
                <a href="https://www.facebook.com/jordan.hoang"><img src={facebook} /></a>
                <a href="https://www.instagram.com/therealjhoang/"><img src={instagram} /></a>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default Contact