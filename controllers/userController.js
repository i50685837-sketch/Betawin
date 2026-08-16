const User = require("../models/User");

async function getProfile(req, res, next) {
  try {
    const user = await User.findById(req.user.id)
      .select("-password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    return res.json({
      success: true,
      user
    });
  } catch (error) {
    next(error);
  }
}

async function updateProfile(req, res, next) {
  try {
    const updates = {};

    if (typeof req.body.name === "string") {
      const name = req.body.name.trim();

      if (!name) {
        return res.status(400).json({
          success: false,
          message: "Name cannot be empty"
        });
      }

      updates.name = name;
    }

    if (typeof req.body.avatar === "string") {
      updates.avatar = req.body.avatar.trim();
    }

    const user = await User.findByIdAndUpdate(
      req.user.id,
      updates,
      {
        new: true,
        runValidators: true
      }
    ).select("-password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    return res.json({
      success: true,
      message: "Profile updated",
      user
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getProfile,
  updateProfile
};
