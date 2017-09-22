import React from 'react'
import Background from './Background.jsx'
import macbookRentopia from '../images/macbookRentopia.png'
import macbookConcreet from '../images/macbookConcreet.png'
import { Grid, Row, Col } from 'react-bootstrap';

class Portfolio extends React.Component {

  render() {
    return (
      <div>
        <Background backgroundType={'portfolio'} heading={'PORTFOLIO'} subheading={`Applications I've Built`}/>
        <Grid>
          <Row>
            <Col xs={12} md={7}>
              <img className="macbook" src={macbookRentopia} />
            </Col>
            <Col xs={12} md={5}>
              <a href="http://www.myrentopia.com" target="_blank"><h1>Rentopia</h1></a>
                <p>Web application that allows for tenants and landlords
                 to iteract with each other via payments, documents, and messages.
                </p>
                <p>Application utilizes Braintree Marketplace's API to
                handle receving and sending payments
                from user to user.
                </p>
            </Col>
          </Row>
          <hr/>
          <Row>
            <Col xs={12} md={5}>
              <a href="http://concreet.date" target="_blank"><h1>Concreet</h1></a>
                <p>Web application that queries multiple users' calendars
                to find time slots that are available for everybody.
                </p>
                <p>The application uses Google Calendar's API to retrieve calendar data.</p>
            </Col>
            <Col xs={12} md={7}>
              <img className="macbook" src={macbookConcreet} />
            </Col>
          </Row>
          <hr/>
        </Grid>
      </div>
    )
  }

}

export default Portfolio