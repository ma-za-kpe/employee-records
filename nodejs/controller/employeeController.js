const express = require('express')
var router = express.Router()
var mongoose = require('mongoose')
var ObjectId = mongoose.Types.ObjectId;

var {Employee} = require('../models/employee')

router.get('/', (req, res) => {
  Employee.find((err, docs) =>{
    if (!err) {
      res.send(docs)
    } else {
      console.log("Error in Retrieving Employees: " + JSON.stringify(err, undefined, 2))
    }
  })
})

router.get('/:id', (req, res) => {

  if (!ObjectId.isValid(req.params.id))
    res.status(400).send(`no record with given id : ${req.params.id}`);

  Employee.findById(req.params.id, (err, docs) => {
    if (!err) {
      res.send(docs)
    } else {
      console.log("Error in Retrieving Employees: " + JSON.stringify(err, undefined, 2))
    }

  });

});

router.post('/', (req, res) => {
  var emp = new Employee({
    name: req.body.name,
    position: req.body.position,
    office: req.body.office,
    salary: req.body.salary
  });
  emp.save((err, docs) => {
    if (!err) {
      res.send(docs)
    } else {
      console.log("Error in Saving Employee: " + JSON.stringify(err, undefined, 2))
    }
  });
});

router.put('/:id', (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    res.status(400).send(`no record with given id : ${req.params.id}`);

    var emp = {
      name: req.body.name,
      position: req.body.position,
      office: req.body.office,
      salary: req.body.salary
    };
    Employee.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, docs) => {
      if (!err) {
        res.send(docs)
      } else {
        console.log("Error in Saving Employee: " + JSON.stringify(err, undefined, 2))
      }
    });
})

router.delete('/:id', (req, res) => {
  if (!ObjectId.isValid(req.params.id))
    res.status(400).send(`no record with given id : ${req.params.id}`);

    Employee.findByIdAndDelete(req.params.id, (err, docs) => {
      if (!err) {
        res.send(docs)
      } else {
        console.log("Error in Saving Employee: " + JSON.stringify(err, undefined, 2))
      }
    })
})

module.exports = router;
