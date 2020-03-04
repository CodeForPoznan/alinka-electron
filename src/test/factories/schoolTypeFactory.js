const SchoolType = require("../../db/models/school_type");
const schoolTypeList = require("../../db/school_types");
const faker = require("faker/locale/pl");

const schoolTypeData = () => {
  return faker.random.arrayElement(schoolTypeList);
};

const schoolTypeFixture = async name => {
  return await SchoolType.create({ name: name || schoolTypeData() });
};

module.exports = schoolTypeFixture;
module.exports.schoolTypeData = schoolTypeData;
