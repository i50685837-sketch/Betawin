const express = require("express");
const router = express.Router();

const {
  getProfile,
  updateProfile
} = require("../controllers/userController");

const authenticate =
  require("../middleware/authenticate");

router.get(
  "/profile",
  authenticate,
  getProfile
);

router.put(
  "/profile",
  authenticate,
  updateProfile
);

module.exports = router;
