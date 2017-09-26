import axios from 'axios'

const ROOT_URL = process.env.NODE_ENV === 'production' ? 'http://www.jordanhoang.com': 'http://localhost:5151'

export function sendEmail(message, cb) {
  console.log('action')
  axios.post(`${ROOT_URL}/sendEmail`, {
    firstName: message.firstName,
    lastName: message.lastName,
    email: message.emailAddress,
    message: message.message
  }).then(() => {

  }).catch(() => {

  })
}