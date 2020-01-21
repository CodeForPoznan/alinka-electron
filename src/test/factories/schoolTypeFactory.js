const SchoolType = require('../../db/models');

const schoolTypeData = (props = {}) => {
  const schoolTypeList = ["przedszkole", "szkoła podstawowa", "szkoła zawodowa", "liceum ogólnokształcące"]
  
  const getSchoolType = (array) => {
    const randomArrayItemNumber = Math.floor(Math.random() * array.length);
    const school_type = schoolTypeList[randomArrayItemNumber];
    return school_type
  }

  return {schoolType: props || getSchoolType(schoolTypeList)}
};

const schoolTypeFixture = async (props = {}) =>  await SchoolType.create(schoolTypeData(props));
console.log(schoolTypeFixture)
module.exports = schoolTypeFixture 