const Sequelize = require("sequelize");
const sequelize = require("../db_config").sequelize;
const School = require("./school");

const SchoolType = sequelize.define(
  "SchoolType",
  {
    name: {
      type: Sequelize.STRING(80),
      allowNull: false,
      unique: true,
      primaryKey: true
    }
  },
  {
    // options
  }
);

SchoolType.hasMany(School, { foreignKey: { allowNull: false } });

module.exports = SchoolType;
