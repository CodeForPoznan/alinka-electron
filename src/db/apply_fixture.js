const { createSchoolType } = require("./api");
const schoolTypeList = [
  "przedszkole",
  "szkoła podstawowa",
  "szkoła ponadpodstawowa",
  "liceum ogólnokształcące"
];

const instertSchoolTypes = schoolTypeList => {
  schoolTypeList.map(schoolType => createSchoolType(schoolType));
};

instertSchoolTypes(schoolTypeList);
