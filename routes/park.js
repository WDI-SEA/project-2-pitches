const express = require('express');
let router = express.Router();
const db = require('../models')
const axios = require('axios')
const park = process.env.PARK


// POST/list display parks based off zipcode, redirect to detail page
router.post('/list', (req, res) => {
    let stateCode = req.body.stateCode

    let parkURL =`https://developer.nps.gov/api/v1/parks?stateCode=${stateCode}&sort=&api_key=${park}`
    axios.get(parkURL)
    .then((apiResponse) => {
        const parks= apiResponse.data.data
        // res.render(parks)
    
        res.render('list', {parks})

    })
   .catch(error => console.log(error))
});

// GET detail page, user can add to favorites, redirect to favorite page

router.get('/detail', (req, res) => {
    let parkCode = req.query.parkCode
    console.log(parkCode)

    let parkURL =`https://developer.nps.gov/api/v1/parks?parkCode=${parkCode}&api_key=${park}`
    axios.get(parkURL)
    .then((apiResponse) => {
        const parkDets= apiResponse.data.data
        console.log(parkDets)
        
    
        res.render('detail', {parkDets})

    })
   .catch(error => console.log(error))
});

// GET/DELETE display user favorites, let them be able to delete from fav list
// router.get('/:favorite', (req, res) => {
//     let parkFav = req.query.name

//     let parkURL =`https://developer.nps.gov/api/v1/parks?q=${parkName}&api_key=${park}`
//     axios.get(parkURL)
//     .then((apiResponse) => {
//         const pF= apiResponse.data.data
//         // res.render(parks)
    
//         res.render('favorite', {pF})

//     })
//    .catch(error => console.log(error))
// });



module.exports = router