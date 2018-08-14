const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/CRUDE-DB', (err) =>{
  if (!err) {
    console.log("mongodb connection is successfull")
  } else {
    console.log("mongodb connection is not successfull: " + JSON.stringify(err, undefined, 2))
  }
});

module.exports = mongoose;
