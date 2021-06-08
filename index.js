const express = require("express");
const axios = require("axios");
const ejsLayouts = require("express-ejs-layouts");
const methodOverride = require("method-override");

const app = express();
const port = process.env.PORT || 3000;


// more info about your pokemon
router.get("/:name", async (req, res) => {
  try {
    if (req.params.name) {
      const spoonacularDataUrl = `https://api.spoonacular.com/recipes/716429/information?apiKey=bc6f5e0d736540d6821b1405b0f24d3f`;
      const result = await axios.get(spoonacularDataUrl);
      let response = result.data;
console.log(response);
      });
    }
  } catch (err) {
    console.log(err);
  }
})

