const { createSchool } = require("../../db/api");
const schoolList = require("../../db/schools.js");

const insertSchools = schoolList => {
  schoolList.map(schoolData => createSchool(schoolData));
};

insertSchools(schoolList);
