const mongoose = require("mongoose");

const tournamentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 150
    },

    sport: {
      type: String,
      required: true,
      trim: true,
      lowercase: true
    },

    description: {
      type: String,
      default: "",
      trim: true
    },

    status: {
      type: String,
      enum: [
        "upcoming",
        "live",
        "finished",
        "cancelled"
      ],
      default: "upcoming",
      index: true
    },

    teams: {
      type: Number,
      default: 0,
      min: 0
    },

    matches: {
      type: Number,
      default: 0,
      min: 0
    },

    startDate: {
      type: Date,
      default: null
    },

    active: {
      type: Boolean,
      default: true,
      index: true
    }
  },
  {
    timestamps: true
  }
);

module.exports =
  mongoose.model("Tournament", tournamentSchema);
