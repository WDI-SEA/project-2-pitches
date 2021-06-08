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

In designing and building your project, you will start by forking and cloneing this repository, and then editing this README to include the following information: 
1. Name of your app

Find Your Park

2. Tech stack you plan to use

express, ejs, axios, ejs-layouts, rowdyrouter

3. Simple wireframes
     * Can be handdrawn, or with tool of your choice
     * Example online tool: [Miro.com](https://miro.com/)

https://miro.com/welcomeonboard/cHB5dHdSVzFJSGxRWk1qQkZjN3h2cjJYR0JXYmh5OEdEUDl4ZlB1S01LTUJpWlV0ZXVQdlBpMWZoVkJPSGNvbHwzMDc0NDU3MzU5NTgzMTQ2Nzg0

5. API you plan to use

National Park Service API
https://www.nps.gov/subjects/developer/api-documentation.htm#/parks/getPark

6. Example of how to call/invoke your API, and a description of what data comes back. 

curl -X GET "https://developer.nps.gov/api/v1/parks?stateCode=CO&api_key=A43KRpfmTr9NbctuhrS66OL0En7VO1RfKoFWmbFz" -H "accept: application/json"

Returns a json file.  Large object with objects and arrays inside

7. MVP goals (x3-5)
     - Set up homepage to display forms to enter either State or Zip code
     - Have second page "List" display list of near by national parks
          include: location, entrance fee, and hours of operation
     - Be able to click on specific national park to get more info
     - Let the link send you to the "Detail" specific park's page and list 
          include park code, description, acitivites, directions, and be able to add to a favorite's page
     - Have favorite button send you to a "Favorite" page that lists all the parks you added and be able to delete from page

8. Stretch goals (x2-5)
     - Style pages
     - Have each "Detail" page display pictures of that park
     - Set up email/password login in stuff

9. Any potential roadblocks?
     - routes and calling correct ejs files
     - delete function
     - setting up email/password login

## How to get started
1. **Fork and clone this repository.**
2. **Edit the text above to include specifics of your project.**
3. **Commit, push, and submit a pull request to this repo with your edited pitch README.**
4. *After you have met with a staff member and your pitch has been approved, suggested next steps:*
      * Write out your routes and create a RESTful routing chart (good example [here](https://gk-hynes.github.io/restful-routes-chart/)).
      * Come up with a breakdown of what you plan to accomplish each day and how you are going to accomplish it.
      * Create a new git repo for your project. 
      * Make all test API calls you need to to ensure your API will be usable for this project. 
      




