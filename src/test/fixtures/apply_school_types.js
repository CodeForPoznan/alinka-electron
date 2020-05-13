const { createSchoolType } = require("../../db/api");
const schoolTypeList = require("../../db/school_types");

const insertSchoolTypes = schoolTypeList => {
  schoolTypeList.map(schoolType => createSchoolType(schoolType));
};

insertSchoolTypes(schoolTypeList);
