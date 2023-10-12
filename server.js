const express = require('express')

require('dotenv').config()
const PORT = process.env.PORT
console.log(PORT)
const app = express()

// ROUTES
app.get('/',(req, res) => {
    res.send('BREADS APP PLACEHOLDER')
})

// Breads
const breadsController = require('./controllers/breads_controller.js')
app.use('/breads', breadsController)

app.listen(PORT, ()=>{
    console.log('listening on port:', PORT)
})