const School = require("../../db/models/school");
const schoolTypeList = require("../../db/school_types");
const faker = require("faker/locale/pl");

const schoolData = type => {
  const schoolType = type || faker.random.arrayElement(schoolTypeList);
  const city = faker.address.city();
  return {
    SchoolTypeName: schoolType,
    name: `${schoolType} nr. ${faker.random.number(200)}`,
    city: city,
    postCode: faker.address.zipCode(),
    street: faker.address.streetAddress(),
    postOffice: city
  };
};

const schoolFixture = async (props = {}) => {
  const data = schoolData(props.SchoolTypeName);
  return await School.create({ ...data, ...props });
};

module.exports = schoolFixture;
module.exports.schoolData = schoolData;
