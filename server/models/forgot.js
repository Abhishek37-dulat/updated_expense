const Sequelize = require("sequelize");
const sequelize = require("../utils/database");

const Forgot = sequelize.define("forgot", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  otp: Sequelize.INTEGER,
  userEmail: Sequelize.STRING,
});

module.exports = Forgot;
