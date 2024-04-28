const Signup = require("../models/expense");
const sequelize = require("../utils/database");
const ExpenseBook = require("../models/formdata.js");

const getUserLeaderBoard = async (req, res) => {
  try {
    const leaderboardofusers = await Signup.findAll({
      attributes: ["id", "name", "total_cost"],
      order: [["total_cost"]],
    });
    return res.status(200).json(leaderboardofusers);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = { getUserLeaderBoard };
