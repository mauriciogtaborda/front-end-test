var express = require("express");
var router = express.Router();
const fetch = require("node-fetch");
let authorResponse = {
  author: { name: "Mauricio", lastname: "Taborda" }
};
/* GET home page. */
router.get("/", function(req, res, next) {
  fetch(
    encodeURI(
      "https://api.mercadolibre.com/sites/MLA/search?q=​" +
        req.query.q +
        "&limit=4"
    )
  )
    .then(response => response.json())
    .then(response => {
      return res.json({
        ...authorResponse,
        ...{
          categories: response.available_filters.find(
            af => af.id === "category"
          ).values,
          items: response.results
        }
      });
    });
});

router.get("/:id", async function(req, res, next) {
  let item, itemDescription;
  Promise.all(
    (item = await fetch(
      encodeURI("https://api.mercadolibre.com/items/" + req.params.id)
    ).then(response => response.json())),
    (itemDescription = await fetch(
      encodeURI(
        "https://api.mercadolibre.com/items/" + req.params.id + "/description"
      )
    ).then(response => response.json()))
  );
  res.json({
    ...authorResponse,
    item: { ...item, description: itemDescription }
  });
});

module.exports = router;
