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
router.get('/:itemName', (req, res) => {
  console.log(req.params);
  res.send('hello');
  
  /*Item.findByName(req.params.)
    .then(user => {
      console.log(user);
      res.json(user.items)
    })*/
})

router.post('/', (req, res) => {
  console.log(req.body);
  Item.create( req.body )
  .then(results => console.log(results))
  .catch((err) => console.log('Error', err))
  
})

router.delete('/:userId', (req, res) => {

  User.findById(req.params.userId)
    .then(user => {

      user.items.id(req.body.itemId).remove()

      user.save(err => {
        if (err) {
          res.send(err)
        }
        res.json(user.items)
      })
    })
})


router.post('/filter/:userId', (req, res) => {
  User.findOne({_id: req.params.userId})
    .where('items.name')
    .equals('Pizza')
    .then(user => {
      console.log(user.items);
    })
})


module.exports = {router}
