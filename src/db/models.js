const Sequelize = require("sequelize");

const sequelize = require("./db_config").sequelize;

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

const School = sequelize.define(
  "School",
  {
    id: {
      type: Sequelize.INTEGER,
      unique: true,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING(80),
      allowNull: false
    },
    city: {
      type: Sequelize.STRING(80),
      allowNull: false
    },
    postCode: {
      type: Sequelize.STRING(6),
      allowNull: false
    },
    street: {
      type: Sequelize.STRING(80),
      allowNull: false
    },
    address: {
      type: Sequelize.VIRTUAL,
      get: () => {
        return this.get("street");
      }
    }
  },
  {
    // options
  }
);

SchoolType.hasMany(School);

module.exports = { SchoolType, School };
