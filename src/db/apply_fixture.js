const { createSchoolType } = require("./api");
console.log(createSchoolType);
const schoolTypeList = ["przedszkole", "szkoła podstawowa", "szkoła ponadpodstawowa", "liceum ogólnokształcące"]

const instertSchoolTypes = (schoolTypeList) => {
    console.log(schoolTypeList);
    schoolTypeList.map(schoolType => createSchoolType(schoolType))
}

instertSchoolTypes(schoolTypeList);
