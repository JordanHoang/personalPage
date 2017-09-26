const express = require('express')
const path = require('path')
const cors = require('cors')

const app = express()
app.use(cors())

// ADD ADDITIONAL SERVER ROUTES ABOVE!!! WEBPACK CONFIGS //
if (process.env.NODE_ENV !== 'production') {
  const webpackMiddleware = require('webpack-dev-middleware')
  const webpack = require('webpack')
  const webpackConfig = require('../webpack.config.js')
  app.use(webpackMiddleware(webpack(webpackConfig))) 
} 

app.use(express.static('dist'))
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'))
})

app.listen(process.env.PORT || 5151, () => console.log('Listening'))