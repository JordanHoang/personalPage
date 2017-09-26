import React from 'react'
import Nav from './Nav.jsx'
import {Switch, Route} from 'react-router-dom'
import Home from './Home.jsx'
import Contact from './Contact.jsx'
import Portfolio from './Portfolio.jsx'
import About from './About.jsx'
import Resume from './Resume.jsx'

class App extends React.Component {

  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/resume' component={Resume} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </main>
    )
  }
}

export default App