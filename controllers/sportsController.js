const Tournament = require("../models/Tournament");
const Result = require("../models/Result");
const LiveScore = require("../models/LiveScore");

async function getSports(req, res, next) {
  try {
    const [tournaments, results] =
      await Promise.all([
        Tournament.find({
          active: true
        })
          .sort({ createdAt: -1 })
          .lean(),

        Result.find()
          .sort({ createdAt: -1 })
          .limit(50)
          .lean()
      ]);

    return res.json({
      success: true,
      tournaments,
      results
    });
  } catch (error) {
    next(error);
  }
}

async function getTournaments(req, res, next) {
  try {
    const tournaments =
      await Tournament.find({
        active: true
      })
        .sort({ startDate: 1 })
        .lean();

    return res.json({
      success: true,
      tournaments
    });
  } catch (error) {
    next(error);
  }
}

async function getResults(req, res, next) {
  try {
    const results = await Result.find()
      .sort({ createdAt: -1 })
      .limit(100)
      .lean();

    return res.json({
      success: true,
      results
    });
  } catch (error) {
    next(error);
  }
}

async function getLiveScores(req, res, next) {
  try {
    const scores =
      await LiveScore.find({
        status: "LIVE"
      })
        .sort({ updatedAt: -1 })
        .lean();

    return res.json({
      success: true,
      scores
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getSports,
  getTournaments,
  getResults,
  getLiveScores
};
