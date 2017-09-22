import React from 'react'
import Background from './Background.jsx'

class Home extends React.Component {

  render() {
    return(
      <div>
        <Background backgroundType={'home'} heading={'JORDAN HOANG'} subheading={'Software Engineer'}/>
      </div>
    )
  }
}

export default Home