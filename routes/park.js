const express = require('express');
let router = express.Router();
const db = require('../models')
const axios = require('axios')
const park = process.env.PARK


// POST/list display parks based off zipcode, redirect to detail page
router.post('/list', (req, res) => {
    let currentUser = req.body.name
    let stateCode = req.body.stateCode

    db.user.findOrCreate({
      where: {
        name: currentUser
    }})

    let parkURL =`https://developer.nps.gov/api/v1/parks?stateCode=${stateCode}&sort=&api_key=${park}`
    axios.get(parkURL)
    .then((apiResponse) => {
        const parks= apiResponse.data.data
        // res.render(parks)
    
        res.render('list', {parks, currentUser})
        

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

// GET route /favorite to display list
router.get('/favorite', (req, res) => {
    // Get all records from the DB of favorites
    db.favorite.findAll()
      .then(result => {
        // render favorite's list
        res.render('favorite', {favorites: result})
      })
  })

// GET/DELETE display user favorites, let them be able to delete from fav list
router.post('/favorite', (req, res) => {
    // Get form data
   
    let name = req.body.name
    console.log(name)
    // add a new record to DB
  
//     db.favorite.findOrCreate({
//       where: {
//         name: name
//     }})
//      .then((data) => {
//           // redirect back to favorites page
//           res.redirect('/favorite')
//       })
//       .catch((err) => {
//         console.log(`uh oh we found an err: ${err}`)
//       })
// })
 db.favorite.findOrCreate({
  where: {
    name: name
}})

async function addPark() {
  try {
    const user = await db.user.findOne()

    const findPark = await user.createFavorite({
      where: {
        name: name
      }
    })
    
    await user.addPark(findPark)
  } catch (error) {
    console.log('🆘 we have an error')
  }
}
res.redirect('/favorite')
addPark()
})



  router.delete('/favorite/:name', (req, res) => {
    //access db for park info
    // use 'include db.user' to access specific user's park db
    // .then db.favorite.destroy where name is req.body.name
    console.log(req.params)
    db.favorite.destroy({
      where: {
        name: req.params.name
      }
    })
    .then ((data) => {
      console.log('The task has been done 😈')
      // . then res.redirect('back') (this will reload the page)
     res.redirect('/favorite')
    })
    .catch((err) => {
      console.log(`Mayday mayday! We are going down!! 🛩  ${err}`)
    })
  })  

  // GET logout route
router.get('/logout', (req, res) => {
  res.render('index', {logout: true})
})


module.exports = router