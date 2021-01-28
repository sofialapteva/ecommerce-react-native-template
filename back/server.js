const express = require('express')

const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.route('/').get((req, res) => {
  res.send(hello)
})

app.listen(3000)
