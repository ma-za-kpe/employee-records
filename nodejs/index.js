const express = require('express')
const bodyParser = require('body-parser')

const {mongoose} = require('./db.js')
var employeeController = require('./controller/employeeController.js')

var app = express()

app.use(bodyParser.json())

app.get("/", (req, res) => {
  // res.send()
})

app.listen(3000, () => console.log("server has started at port : 3000"))

app.use('/employees', employeeController);
