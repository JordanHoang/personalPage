import React from 'react'
import Background from './Background.jsx'
import Footer from './Footer.jsx'
import macbookRentopia from '../images/macbookRentopia.png'
import macbookConcreet from '../images/macbookConcreet.png'
import macbookWorkoutLog from '../images/macbookWorkoutLog.png'
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
              <a className="appLink" href="http://www.myrentopia.com" target="_blank"><h1>Rentopia</h1></a>
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
              <a className="appLink" href="http://concreet.date" target="_blank"><h1>Concreet</h1></a>
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
          <Row>
            <Col xs={12} md={7}>
              <img className="macbook" src={macbookWorkoutLog} />
            </Col>
            <Col xs={12} md={5}>
              <a className="appLink" href="https://github.com/JordanHoang/workout.log" target="_blank"><h1>workout.log()</h1></a>
                <p>Web application that allows users to track their daily caloric
                intake and expenditure.
                </p>
                <p>Application utilizes Nutritionix's API to
                allow users to search the largest verified nutrition database
                to get accurate nutritional information on the foods they've eaten.
                </p>
            </Col>
          </Row>
        </Grid>
        <Footer/>
      </div>
    )
  }

}

export default Portfolio