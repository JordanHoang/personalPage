import React from 'react'
import ReactDOM from 'react-dom'
import ScrollToTop from './components/ScrollToTop.jsx'
import App from './components/App.jsx'
import { BrowserRouter } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import styles from './styles.css'
import favicon2 from './images/favicon2.ico'

ReactDOM.render((
  <MuiThemeProvider>
    <BrowserRouter>
      <ScrollToTop>
        <App/>
      </ScrollToTop>
    </BrowserRouter>
  </MuiThemeProvider>
), document.getElementById('app'))