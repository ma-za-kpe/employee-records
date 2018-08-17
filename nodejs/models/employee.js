const mongoose = require('mongoose')

var Employee = mongoose.model('People', {
  name: {type: String},
  position: {type: String},
  office: {type: String},
  salary: {type:Number}
})

module.exports = { Employee };
