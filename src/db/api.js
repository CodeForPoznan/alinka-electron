const SchoolType = require("./models");

const createSchoolType = () => {
  SchoolType.sync({ force: true }).then(() => {
    return SchoolType.create({
      schoolType: "szkoła podstawowa"
    });
  });
};

const getSchoolTypeList = () => {
  return SchoolType.findAll();
};

module.exports = { createSchoolType, getSchoolTypeList };
