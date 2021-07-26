const express = require("express");
const logic = require('./movieLogic')
const router = express.Router();


// Search movie by name
router.get("/movie/:name", async (req, res) => {
  try {
    const name = req.params.name;
    const movie = await logic.getMovieByName(name);
    res.send(movie)
  }
  catch (err) {
    res.status(500).send(err.message);
  }
});



module.exports = router;
