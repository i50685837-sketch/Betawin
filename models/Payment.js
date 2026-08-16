const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true
    },

    phoneNumber: {
      type: String,
      required: true,
      trim: true
    },

    amount: {
      type: Number,
      required: true,
      min: 1
    },

    merchantRequestId: {
      type: String,
      default: null,
      index: true
    },

    checkoutRequestId: {
      type: String,
      default: null,
      index: true
    },

    mpesaReceiptNumber: {
      type: String,
      default: null
    },

    resultCode: {
      type: Number,
      default: null
    },

    resultDescription: {
      type: String,
      default: null
    },

    status: {
      type: String,
      enum: [
        "pending",
        "success",
        "failed"
      ],
      default: "pending",
      index: true
    },

    transactionDate: {
      type: String,
      default: null
    }
  },
  {
    timestamps: true
  }
);

module.exports =
  mongoose.model("Payment", paymentSchema);
