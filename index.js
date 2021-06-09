require('dotenv').config()
const express = require('express')
const axios = require ('axios')
const ejsLayouts = require('express-ejs-layouts')
const db = 'find_your_park'

const app = express()
const PORT = process.env.PORT
const park = process.env.PARK
console.log(park)

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use (ejsLayouts)



app.listen(PORT, () => {
    console.log('...listening on', PORT );
  });