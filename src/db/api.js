const { SchoolType, School } = require("./models");

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

const createSchool = type => {
  School.sync({ force: true }).then(() =>
    School.create({
      name: "TEST",
      city: "Poznan",
      postCode: "61-666",
      street: "Mostowa 4",
      schooltypeSchoolType: type || "przedszkole"
    })
  );
};

const getSchoolList = () => {
  return School.findAll();
};

module.exports = {
  createSchoolType,
  getSchoolTypeList,
  createSchool,
  getSchoolList
};
