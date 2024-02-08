const express = require('express')
require('dotenv').config()
const app = express()

app.get('/', (req, res) => {
  console.log('Welcome to Backend')
  res.send('hey')
})
const PORT = process.env.PORT | 8001
console.log(PORT)
app.listen(PORT, function (err) {
  if (!err) console.log(`Server listening to port ${PORT}`)
  else {
    console.log(`Error ${err}`)
  }
})
