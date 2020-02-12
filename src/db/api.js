const SchoolType = require("./models");

const createSchoolType = schoolType => {
  SchoolType.sync({ force: true }).then(() => {
    return SchoolType.create({
      schoolType: schoolType
    });
  });
};

const getSchoolTypeList = () => {
  return SchoolType.findAll();
};

module.exports = { createSchoolType, getSchoolTypeList };
