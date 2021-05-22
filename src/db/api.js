const { School } = require("./models");


const getSchoolTypeList = () => {
  return School.findAll({
    attributes: ["schoolTypeName"]
  }).then(result => {
    return result.map(school => school.dataValues.schoolTypeName)
                 .filter((schoolTypeName, index, list) => list.indexOf(schoolTypeName) === index)
                 .map((schoolType, index) => {return {key: index + 2, text: schoolType, value: schoolType}})
  });
};


const createSchool = ({
  name,
  city,
  street,
  schoolTypeName,
  number,
  postalCode,
  postOffice
}) => {
  School.sync({ force: true }).then(() =>
    School.create({
      name,
      city,
      street,
      schoolTypeName,
      number,
      postalCode,
      postOffice
    })
  );
};

const getSchoolList = schoolType => {
  return School.findAll({
    where: {
      SchoolTypeName: schoolType
    }
  });
};

module.exports = {
  getSchoolTypeList,
  createSchool,
  getSchoolList
};
