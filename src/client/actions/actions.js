import axios from 'axios'

console.log(process.env.NODE_ENV, 'wewewe')
const ROOT_URL = process.env.NODE_ENV === 'production' ? 'http://jordanhoang.com': 'http://localhost:5151'

export function sendEmail(message, cb) {
  console.log('action')
  axios.post(`${ROOT_URL}/sendEmail`, {
    firstName: message.firstName,
    lastName: message.lastName,
    email: message.emailAddress,
    message: message.message
  }).then((res) => {
    cb(res)
  }).catch((err) => {
    console.log(err)
  })
}