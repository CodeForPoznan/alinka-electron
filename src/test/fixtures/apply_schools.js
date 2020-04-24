const { createSchool } = require("../../db/api");
const { schoolData } = require("../factories/schoolFactory");

const insertSchool = numberOfSchools => {
  Array(numberOfSchools || 10)
    .fill(0)
    .forEach(() => createSchool(schoolData()));
};

insertSchool();
