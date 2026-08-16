const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100
    },

    category: {
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

    image: {
      type: String,
      default: ""
    },

    icon: {
      type: String,
      default: "🎮"
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

module.exports = mongoose.model("Game", gameSchema);
