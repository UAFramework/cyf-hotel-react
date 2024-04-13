import cors from 'cors'
import express from 'express'
import fakeBookings from './data/fakeBookings.js'
import fakeCustomers from './data/fakeCustomers.js'

const app = express()
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.status(200).send('Hello')
})

app.get('/customers', async (req, res) => {
  const timeoutMs = 2000 + Math.ceil(3 * 1000 * Math.random())
  setTimeout(() => {
    res.status(200).json({ timeout: timeoutMs, data: fakeCustomers })
  }, timeoutMs)
})

app.get('/bookings', async (req, res) => {
  const timeoutMs = 2000 + Math.ceil(3 * 1000 * Math.random())
  setTimeout(() => {
    res.status(200).json({ fakeBookings })
  }, timeoutMs)
})

app.listen(process.env.PORT || 4000, function () {
  const addressInfo = this.address()
  console.log(`Server is listening on port ${addressInfo.port}. Ready to accept requests!`)
})
