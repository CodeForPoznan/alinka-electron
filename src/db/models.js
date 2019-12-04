const Sequelize = require("sequelize");

const sequelize = require("./db_config").sequelize;

const SchoolType = sequelize.define(
  "schooltype",
  {
    schoolType: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },
  {
    // options
  }
);

module.exports = SchoolType;
