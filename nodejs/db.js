const mongoose = require('mongoose')
const assert = require('assert')

mongoose.connect('mongodb://localhost:27017/employee', (err) =>{
  if (!err) {
    console.log("mongodb connection is successfull...")
  } else {
    console.log("mongodb connection is not successfull: " + JSON.stringify(err, undefined, 2))
  }
});

module.exports = mongoose;
