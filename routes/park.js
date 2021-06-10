const express = require('express');
let router = express.Router();
const db = require('../models')
const axios = require('axios')
const park = process.env.PARK


// GET /list display parks based off zipcode, redirect to detail page
router.post('/list', (req, res) => {
    let stateCode = req.body.stateCode

    let parkURL =`https://developer.nps.gov/api/v1/parks?stateCode=${stateCode}&sort=&api_key=${park}`
    axios.get(parkURL)
    .then((apiResponse) => {
        console.log(apiResponse.data.data[0].fullName)
        let parkName = apiResponse.data.data[0].fullName
        let location = apiResponse.data.data[0].addresses[0]
        let entranceFee = apiResponse.data.data[0].entranceFees[0].cost
        let feeDescription = apiResponse.data.data[0].entranceFees[0].description
        let hOP = apiResponse.data.data[0].operatingHours[0].description
        let hOPD = apiResponse.data.data[0].operatingHours[0].standardHours

        res.render('list', {name: parkName, location: location, entranceFee: entranceFee, feeD: feeDescription, hours: hOP, hourD: hOPD})
   })
   .catch(error => console.log(error))
})

// POST detail page, user can add to favorites, redirect to favorite page



// GET/DELETE display user favorites, let them be able to delete from fav list




module.exports = router