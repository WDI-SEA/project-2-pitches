const unirest = require('unirest')
const API_KEY = 'YOUR_API_KEY'
const INGREDIENT_LIST = ['bananas', 'apples', 'cheese', 'crackers']
let requestString =
  'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/find' +
  'ByIngredients?number=5&ranking=1&ingredients='
const ingredientsString = INGREDIENT_LIST.map(
  (ingredient) => ingredient + '%2C'
)
requestString = requestString + ingredientsString
unirest
  .get(requestString)
  .header('X-RapidAPI-Key', API_KEY)
  .end(function (result) {
    if (result.status === 200) {
      getRecipeData(result.body)
    }
  })
