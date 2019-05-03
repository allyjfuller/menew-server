'use strict';
const express = require('express')
const passport = require('passport')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const config = require('../config')
const router = express.Router()
const jwtAuth = passport.authenticate('jwt', {session: false})
const { Item } = require('../items/model')


//router.use(jwtAuth)
router.use(bodyParser.json())

// Get user items
// router.get('/:itemName', (req, res) => {
//   console.log(req.params);
//   res.send('hello');
  
//})

router.post('/', (req, res) => {
  console.log(req.body);
  Item.create( req.body )
  .then(results => res.json(results))
  .catch((err) => console.log('Error'))

})

router.get('/:currentUser', (req, res) => {
  Item.find({userEmail:req.params.currentUser})
  .then(results => res.json(results))
  .catch((err) => console.log(err, 'Error'))
})

router.get('/:item', (req, res) => {
  Item.find( req.body )
  .then(results => res.json(results))
  .catch((err) => console.log(err, 'Error'))
})

router.delete('/:_id', (req, res) => {
  console.log('Hello')
  Item.findByIdAndRemove(req.params._id)
  .then(results => res.json(results))
  .catch((err) => console.log(err, 'Error'))

})


module.exports = {router}
