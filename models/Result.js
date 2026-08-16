const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema(
  {
    sport: {
      type: String,
      required: true,
      trim: true,
      lowercase: true
    },

    league: {
      type: String,
      default: "",
      trim: true
    },

    home: {
      type: String,
      required: true,
      trim: true
    },

    away: {
      type: String,
      required: true,
      trim: true
    },

    homeScore: {
      type: Number,
      default: 0,
      min: 0
    },

    awayScore: {
      type: Number,
      default: 0,
      min: 0
    },

    status: {
      type: String,
      default: "Finished",
      trim: true
    },

    date: {
      type: Date,
      default: null
    },

    winner: {
      type: String,
      default: "",
      trim: true
    }
  },
  {
    timestamps: true
  }
);

module.exports =
  mongoose.model("Result", resultSchema);
