const express = require('express')
const path = require('path')
const cors = require('cors')
const parser = require('body-parser');
const nodemailer = require('nodemailer')
const emailConfig = require('../emailConfig')

const app = express()
app.use(cors())
app.use(parser())

app.post('/sendEmail', (req, res) => {
  let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: emailConfig.EMAIL_ADDRESS,
      pass: emailConfig.EMAIL_PW
    }
  })

  let mailOptions = {
    from: emailConfig.EMAIL_ADDRESS,
    to: 'jordan.n.hoang@gmail.com',
    subject: 'Email from Personal Website',
    text: JSON.stringify(req.body),
  }

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err)
    } else {
      console.log('Message sent: ' + info.response)
      res.sendStatus(201)
    }
  })
})

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