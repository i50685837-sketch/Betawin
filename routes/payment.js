const express = require("express");
const router = express.Router();

const {
  initiateSTK,
  mpesaCallback
} = require("../controllers/paymentController");

const authenticate =
  require("../middleware/authenticate");

// Customer starts STK Push
router.post(
  "/stkpush",
  authenticate,
  initiateSTK
);

// Daraja callback
// Do NOT protect this with JWT.
router.post(
  "/callback",
  mpesaCallback
);

module.exports = router;
