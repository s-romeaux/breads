const express = require('express')
const breads = express.Router()
const Bread = require('../models/read.js')

// // INDEX the old one
// breads.get('/', (req, res) => {
//     res.send('This is the index at /breads')
// })


// INDEX
breads.get('/', (req, res) => {
  Bread.find()
      .then(foundBreads => {
          res.render('index', {
              breads: foundBreads,
              title: 'Index Page'
          })
      })
})






//SHOW
breads.get('/:id', (req, res) => {
  Bread.findById(req.params.id)
    .then(foundBread => {
      res.render('show', {
        bread: foundBread
      })
    })
    .catch(err => {
      res.render('My404')
    })
})

//UPDATE
breads.put('/:arrayIndex', (req, res) => {
  if(req.body.hasGluten === 'on') {
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  Bread[req.params.arrayIndex] = req.body
  res.redirect(`/breads/${req.params.arrayIndex}`)
})

//DELETE
breads.delete('/:indexArray', (req, res) => {
  Bread.splice(req.params.indexArray, 1)
  res.status(303).redirect('/breads')
})


// CREATE
breads.post('/', (req, res) => {
  if(!req.body.image) {
      req.body.image = 'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?%20ixid-MXwxMjA3f%20DB8MHXwaG90by1wYwdlfHX8fGVufDB8fHw3D&ixLib=rb-1.2.16auto=format&fit=crops.%20W=1050&q=80'
  }
  if(req.body.hasGluten === 'on') {
    req.body.hasGluten = true
  } else {
    req.body.hasGluten = false
  }
  Bread.create(req.body)
  res.redirect('/breads')
})


module.exports = breads
