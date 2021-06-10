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
        
        let parkName = apiResponse.data.data[0].fullName
        let location = apiResponse.data.data[0].addresses[0].line1
        let address = apiResponse.data.data[0].addresses[0].city
        let address2 = apiResponse.data.data[0].addresses[0].stateCode
        let address3 = apiResponse.data.data[0].addresses[0].postalCode
        let entranceFee = apiResponse.data.data[0].entranceFees[0].cost
        let feeDescription = apiResponse.data.data[0].entranceFees[0].description
        let hOP = apiResponse.data.data[0].operatingHours[0].description
        let hOPD = apiResponse.data.data[0].operatingHours[0].standardHours
        console.log(parkName, location, address, address2, address3, entranceFee, feeDescription, hOP, hOPD)

        res.render('list', {name: parkName, location: location, address: address, address2: address2, address3: address3, entranceFee: entranceFee, feeD: feeDescription, hours: hOP, hourD: hOPD})
   })
   .catch(error => console.log(error))
});

// POST detail page, user can add to favorites, redirect to favorite page



// GET/DELETE display user favorites, let them be able to delete from fav list




module.exports = router