const knex = require('./db_config').knex;
const SchoolType = require("./models");

const createSchoolType = (schoolType) => {
  return new SchoolType({
    type: schoolType
  }).save();
};

const getSchoolTypeList = async () => {

  return await SchoolType.fetchAll().then(data => data.serialize())
  .catch((err) => {
    console.log(err)
  })

}

module.exports = { createSchoolType, getSchoolTypeList }
