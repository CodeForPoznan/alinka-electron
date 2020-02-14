const Sequelize = require("sequelize");
const { DataTypes } = require("sequelize");

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
    postOffice: {
      type: Sequelize.STRING(80),
      allowNull: false
    },
    street: {
      type: Sequelize.STRING(80),
      allowNull: false
    },
    address: {
      type: Sequelize.VIRTUAL(DataTypes.STRING, ["city", "street"]),
      get() {
        return `${this.getDataValue('city')}, ${this.getDataValue("street")}`;
      }
    },
    post: {
      type: Sequelize.VIRTUAL(DataTypes.STRING, ["postCode", "postOffice"]),
      get() {
        const {postOffice, city, postCode} = this;
        const postLocation = postOffice === city ? city : postOffice;
        return `${postCode} ${postLocation}`;
      }
    },
  },
  {
    // options
  }
);

SchoolType.hasMany(School, { allowNull: false });

module.exports = { SchoolType, School };
