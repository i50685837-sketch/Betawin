const User = require("../models/User");

async function requireAdmin(req, res, next) {
  try {
    if (!req.user || !req.user.id) {
      return res.status(401).json({
        success: false,
        message: "Authentication required"
      });
    }

    const user = await User.findById(req.user.id)
      .select("role active");

    if (!user || !user.active) {
      return res.status(401).json({
        success: false,
        message: "Account unavailable"
      });
    }

    if (user.role !== "admin") {
      return res.status(403).json({
        success: false,
        message: "Admin access required"
      });
    }

    req.admin = user;

    next();
  } catch (error) {
    next(error);
  }
}

module.exports = requireAdmin;
