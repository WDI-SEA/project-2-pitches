# Project 2: Expanded Pokedex

For this project, I would like to take the PokeAPI that we worked with in our deliverable and greatly expand its functionality. 

There is a wealth of information in the PokeAPI that I unfortunately wasn't able to mine and integrate in the short time we had with this deliverable. Currently, my PokeDex features teh current functions:

[✓] A home.ejs page featuring the original 151 pokemon.

[✓] A button for adding individual pokemon to your favourites list via an express POST route.

[✓] A button for accessing your favorites via an express GET route.

[✓] A button for accessing a show.ejs page with detailed information on an individual favorited pokemon. 

[✓] A combined axios.all request allowing me to access more information from the PokeAPI.

For an extended Pokedex, here are the features I would like to implement:

## MVP

[] Redirecting the home route to a new map.ejs page. Instead of presenting a list of all possible pokemon, this page would render a map with clickable routes. 

[] Once a route is clicked, a new route.ejs page would appear displaying route information and all pokemon available in that route. The displayed pokemon can then be favorited as usual. Basically a simplified point-and-click Pokemon Go using real game maps.

[] The ability to limit the number of Pokemon in your favorites list to 6, mimicking the party size in the games, and encouraging users to explore the app and make wise choices.

[] The ability to release party pokemon back into the wild--that is, delete them from your favorites list (and therefore from the SQL database table).

[] The ability to nickname Pokemon.

[] Modified 'pokemons' table with a dexnum column for each favorited pokemon, allowing me to access much more data from the PokeAPI and display it in my .ejs files.

## STRETCH GOALS

[] Multiple 'tabs' within the home.ejs page featuring more generations of pokemon.

[] A functioning Move List for each pokemon on their show.ejs page, complete with names, level/learning method, type, damage, and in-game description.

[] Redirect the 'favourites' button to open up a side menu containing the user's party. This would help streamline the user experience, allowing the user to explore routes and add pokemon to their party WITHOUT leaving the map screen.

[] Addition of a small animated sprite representing the user on the map. Upon clicking a route, the sprite would then walk to that location.

### TECHNICAL OVERVIEW

- HTML5, CSS, JavaScript
- Express, EJS, EJS Layouts
- Axios
- SQL (Postgres), Sequelize
- PokeAPI

### VISUALS

Link to Miro Whiteboard: https://miro.com/app/board/o9J_lAVfpik=/

In-game screenshot from Pokemon FireRed representing map.ejs page

<img width="500" src="http://pokedream.com/games/fireleaf/worldmap/worldmap.png">


Potential alternate map

<img width="500" src="https://cdn2.bulbagarden.net/upload/thumb/2/25/LGPE_Kanto_Map.png/1200px-LGPE_Kanto_Map.png">


Image of Route 1. Each route.ejs page would feature a similar view of the whole area, with a scrollable list below featuring all available pokemon.

<img width="500" src="https://cdn2.bulbagarden.net/upload/1/1b/Kanto_Route_1_HGSS.png">


Wireframe of Map

<img width="500" src="Screen Shot 2021-06-08 at 1.38.06 PM.png">


Wireframe of Route + Pokemon

<img width="500" src="Screen Shot 2021-06-08 at 1.38.17 PM.png">

### REQUIRED LOCATIONS

#### Citys & Towns
- Pallet Town
- Viridian City
- Pewter City
- Cerulean City
- Vermilion City
- Lavender Town
- Celadon City
- Fuchsia City
- Saffron City
- Cinnabar Island

#### Areas of Interest
- Cerulean Cave
- Diglett's Cave
- Mt. Moon
- Pokemon Mansion
- Pokemon Tower
- Power Plant
- Rock Tunnel
- Safari Zone
- Victory Road
- Viridian Forest

### Routes
- 1 to 25

### POTENTIAL PITFALLS

- Difficulty in rendering map in a satisfactory manner. May have to use Canvas API.

- Difficulty linking routes to pokemon lists. Each route would most likely require its own table/model.

- Difficulty chaining together axios requests. This would impact my ability to retrieve information on moves and locations, as well as other miscellaneous information that I would otherwise like to present in my show.ejs page.







