const express = require('express');
let router = express.Router();
const db = require('../models')
const axios = require('axios')
const park = process.env.PARK


// GET /list display parks based off zipcode, redirect to detail page
router.post('/list', (req, res) => {
    let stateCode = req.body.stateCode


    let parkURL =`https://developer.nps.gov/api/v1/parks?stateCode=${stateCode}&sort=&api_key=${park}`
    axios.get(parkURL).then(apiResponse => {
        let parkStat = apiResponse.data.results
        res.render('list', { parkStat })
    })
})

// POST detail page, user can add to favorites, redirect to favorite page



// GET/DELETE display user favorites, let them be able to delete from fav list




module.exports = router