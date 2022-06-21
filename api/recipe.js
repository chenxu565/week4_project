const express = require("express");
const router = express.Router();

router.get("/:food", (req, res) =>{
    res.json({name: req.params.food, instructions: ['a'], ingredients: ['b']});
  //   console.log(req.params.food);
  })

router.post("/", (req, res) => {
  console.log(req.body);
  res.send(req.body);
})

module.exports = router;