const express = require("express");
const router = express.Router();

const {
  getGames,
  createGame
} = require("../controllers/gameController");

const authenticate =
  require("../middleware/authenticate");

const requireAdmin =
  require("../middleware/requireAdmin");

router.get(
  "/",
  authenticate,
  getGames
);

router.post(
  "/",
  authenticate,
  requireAdmin,
  createGame
);

module.exports = router;
