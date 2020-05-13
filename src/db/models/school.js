const Sequelize = require("sequelize");
const { DataTypes } = require("sequelize");

const sequelize = require("../db_config").sequelize;

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
      allowNull: false,
      validate: {
        isValidPolishPostCode(value) {
          const regex = /^[0-9]{2}-[0-9]{3}$/;
          if (!regex.test(value)) throw new Error("Invalid polish postal code");
        }
      }
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
        return `${this.getDataValue("city")}, ${this.getDataValue("street")}`;
      }
    },
    post: {
      type: Sequelize.VIRTUAL(DataTypes.STRING, ["postCode", "postOffice"]),
      get() {
        const { postOffice, city, postCode } = this;
        const postLocation = postOffice === city ? city : postOffice;
        return `${postCode} ${postLocation}`;
      }
    }
  },
  {
    // options
  }
);

module.exports = School;
