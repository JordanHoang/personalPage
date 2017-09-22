import React from 'react'
import Background from './Background.jsx'

class Home extends React.Component {

  render() {
    return(
      <Background backgroundType={'home'} heading={'Jordan Hoang'} subheading={'Software Engineer'}/>
    )
  }
}

export default Home