const Game = require("../models/Game");

async function getGames(req, res, next) {
  try {
    const games = await Game.find({
      active: true
    })
      .sort({ createdAt: -1 })
      .lean();

    return res.json({
      success: true,
      games
    });
  } catch (error) {
    next(error);
  }
}

async function createGame(req, res, next) {
  try {
    const {
      name,
      category,
      description,
      image,
      icon,
      active
    } = req.body;

    if (!name || !category) {
      return res.status(400).json({
        success: false,
        message: "Name and category are required"
      });
    }

    const game = await Game.create({
      name: name.trim(),
      category: category.trim().toLowerCase(),
      description: description || "",
      image: image || "",
      icon: icon || "🎮",
      active:
        typeof active === "boolean"
          ? active
          : true
    });

    return res.status(201).json({
      success: true,
      message: "Game created",
      game
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getGames,
  createGame
};
