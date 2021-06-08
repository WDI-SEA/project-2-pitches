# Project 2 Pitch Guidelines
Project Description and Pitch Guidelines for SEIR SEA P2

---
## Project 2 Goals

In your second project you will create a full stack Express and Postgres app which has:
- *At least x2 models, and utilize and build at least one relationship between the two models.*
- *Sequelize as an ORM to interact with and create your database.*
- *An Express server utilizing EJS/EJS layouts for UI design and styling.*
- *Interaction with and inclusion of at least one API.*

## Project 2 Pitch Guidelines

        1. Name of your app
        Auto Dispatch (still working on name) 
        
        2. Tech stack you plan to use
        Node 
        Express
        Sequelize
        Axios
        Bootstrap

        3. Simple wireframes
        
             * Can be handdrawn, or with tool of your choice
             * Example online tool: [Miro.com](https://miro.com/)
        4. API you plan to use
        Mapbox - (api key) boundariesAPI, PlacesApi(location filters and bias)
        Stretch::
        ipapi (api key) - help you to find the public IP address of a device, for any IP address you can get:city, region (name & code), country (name & code), continent, postal code / zip code, latitude, longitude, timezone, utc offset
        Pusher Beams(api key)- Push notifications for Android & iOS
        
        5. Example of how to call/invoke your API, and a description of what data comes back.
        API (https://account.mapbox.com/)
        (on Postman as localhost:5000/search?city=New York city&state=Ny)
        Returned: 
        {
  id: 'poi.197568526789',
  type: 'Feature',
  place_type: [ 'poi' ],
  relevance: 1,
  properties: {
    foursquare: '4b1d097bf964a520540b24e3',
    landmark: true,
    address: '33 West 37th Street',
    category: 'conference center meeting room, meeting room, conference center'
  },
  text: 'Marriott Vacation Club Pulse',
  place_name: 'Marriott Vacation Club Pulse, 33 West 37th Street, New York, New York 10018, United States',
  matching_text: 'New York City',
  matching_place_name: 'New York City, 33 West 37th Street, NY, New York 10018, United States',
  center: [ -73.984819, 40.751296 ],
  geometry: { coordinates: [ -73.984819, 40.751296 ], type: 'Point' },
  context: [
    { id: 'neighborhood.290417', text: 'Garment District' },
    { id: 'postcode.9969521345512110', text: '10018' },
    {
      id: 'locality.12696928000137850',
      wikidata: 'Q11299',
      text: 'Manhattan'
    },
    { id: 'place.2618194975964500', wikidata: 'Q60', text: 'New York' },
    {
      id: 'district.12113562209855570',
      wikidata: 'Q500416',
      text: 'New York County'
    },
    {
      id: 'region.17349986251855570',
      wikidata: 'Q1384',
      short_code: 'US-NY',
      text: 'New York'
    },
    {
      id: 'country.19678805456372290',
      wikidata: 'Q30',
      short_code: 'us',
      text: 'United States'
    }
  ]
}
        
        6. MVP goals (x3-5)
            1. user can set whatever city/state/general location on a map
                (ie. New York City-all boroughs)
            2. user can chart general zones or boundaries over certain areas on map 
                (can be customized to set all of Manhattan as 1 zone or just West side from 57th st. to 120th st. from 12th Av/Riverside to Central Park West)
            3. user can assign riders to 1 or multiple zones 
            4. when user imputs customer info, the app returns appropriate zone info and which rider to send it to
            5. customer info is stored in a table with corresponding address(can be multiple addresses) 
            each address has a value of 1 zone
       
        7. Stretch goals (x2-5)
            2. integration of auto detect for text messages, app listens on user side for incoming texts from 
            customer phone # 
            3. when text is recieved from customer phone number, the app auto generates the appropriate
            zone and rider info for user to send push notification 
        -------
        (SUPER strech goals)
        1. app fully automates sms/text message detection, analyzes syntax inside message
        2. app uses pusher beams to send push notification to specific rider 

        8. Any potential roadblocks?
        getting data of random addresses 
        returning zone info from address input
        communication between multiple apis 

## How to get started
2. **Edit the text above to include specifics of your project.**
3. **Commit, push, and submit a pull request to this repo with your edited pitch README.**
4. *After you have met with a staff member and your pitch has been approved, suggested next steps:*
      * Write out your routes and create a RESTful routing chart (good example [here](https://gk-hynes.github.io/restful-routes-chart/)).
      * Come up with a breakdown of what you plan to accomplish each day and how you are going to accomplish it.
      * Create a new git repo for your project. 
      * Make all test API calls you need to to ensure your API will be usable for this project. 
      




