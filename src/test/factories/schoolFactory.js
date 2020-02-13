const { School } = require("../../db/models");
const schoolTypeList = require("../../db/school_types");
const faker = require("faker/locale/pl");

const schoolData = () => {
  const schoolType = faker.random.arrayElement(schoolTypeList);
  return {
    type: schoolType,
    name: `${schoolType} nr. ${faker.random.number(200)}`,
    city: faker.address.city(),
    postCode: faker.address.zipCode(),
    street: faker.address.streetAddress()
  };
};

const schoolFixture = async (props = {}) => {
  const schoolData = schoolData();
  return await School.create({ schoolData, ...props });
};

module.exports = schoolFixture;
module.exports.schoolData = schoolData;
