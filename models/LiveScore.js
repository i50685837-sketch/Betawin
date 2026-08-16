const mongoose = require("mongoose");

const liveScoreSchema = new mongoose.Schema(
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

    period: {
      type: String,
      default: "LIVE",
      trim: true
    },

    status: {
      type: String,
      enum: [
        "LIVE",
        "PAUSED",
        "FINISHED",
        "CANCELLED"
      ],
      default: "LIVE",
      index: true
    }
  },
  {
    timestamps: true
  }
);

module.exports =
  mongoose.model("LiveScore", liveScoreSchema);
