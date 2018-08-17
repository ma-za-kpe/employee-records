const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const {mongoose} = require('./db.js')
var employeeController = require('./controller/employeeController.js')

var app = express()

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))

app.get("/", (req, res) => {
 res.send("welcome")
})

app.listen(3000, () => console.log("server has started at port : 3000"))

app.use('/emp', employeeController);
