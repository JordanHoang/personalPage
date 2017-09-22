import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App.jsx'
import { BrowserRouter } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import styles from './styles.css'

ReactDOM.render((
  <MuiThemeProvider>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </MuiThemeProvider>
), document.getElementById('app'))