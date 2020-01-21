const Sequelize = require("sequelize");

const sequelize = require("./db_config").sequelize;

const SchoolType = sequelize.define(
  "schooltype",
  {
    schoolType: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    }
  },
  {
    // options
  }
);

module.exports = SchoolType;
