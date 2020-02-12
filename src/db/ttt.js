const { createSchoolType, createSchool } = require("./api");
const schoolTypeList = [
  "przedszkole",
  "szkoła podstawowa",
  "szkoła ponadpodstawowa",
  "liceum ogólnokształcące"
];

const insertSchoolTypes = schoolTypeList => {
  schoolTypeList.map(schoolType => createSchoolType(schoolType));
};

const insertSchool = () => {
  createSchool();
};

// insertSchoolTypes(schoolTypeList);
insertSchool();
