const express = require("express");
const router = express.Router();

const {
  getSports,
  getTournaments,
  getResults,
  getLiveScores
} = require("../controllers/sportsController");

const authenticate =
  require("../middleware/authenticate");

router.get(
  "/",
  authenticate,
  getSports
);

router.get(
  "/tournaments",
  authenticate,
  getTournaments
);

router.get(
  "/results",
  authenticate,
  getResults
);

router.get(
  "/live-scores",
  authenticate,
  getLiveScores
);

module.exports = router;
