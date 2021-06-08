const express = require('express')
const app = express()
const axios = require('axios')
PORT = 3000


app.get('/', (req, res) => {
    const motQuote = 'https://api.fisenko.net/quotes'
    axios.get(motQuote)
    .then(apiResponse => {
        let justQuote = apiResponse.data
        res.send(console.log(justQuote))
    })
   .catch((error => {
       console.log(error)
    }))
})




app.listen(3000, 
    console.log(`...listening on ${PORT}`)
)