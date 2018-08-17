const mongoose = require('mongoose')

var Employee = mongoose.model('Emp', {
  name: {type: String},
  position: {type: String},
  office: {type: String},
  salary: {type:Number}
})

module.exports = { Employee };
