const express = require("express");
const router = express.Router();

router.get("/recipe/:food", (req, res) =>{
    res.json({name: req.params.food, instructions: ['Example instructions'], ingredients: ['Example ingredients']});
  //   console.log(req.params.food);
  })

router.post("/recipe", (req, res) => {
  // console.log(req.body);
  console.log("json received.");
  res.send(req.body);
})

router.post("/images", (req, res) => {
  // console.log(req.body);
  console.log("images received.");
})

module.exports = router;