require('dotenv').config()
const express = require('express')
const axios = require ('axios')
const ejsLayouts = require('express-ejs-layouts')
const db = 'find_your_park'

const app = express()
const PORT = process.env.PORT
const park = process.env.PARK

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use (ejsLayouts)
app.use(express.static(__dirname + '/public'))

// GET / for main homepage
app.get('/', (req, res) => {
    res.render('index')
})

app.use('/park', require('./routes/park'))


app.listen(PORT, () => {
    console.log('...listening on', PORT );
  });

