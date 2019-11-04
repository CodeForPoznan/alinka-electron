const { createSchoolType, getSchoolTypeList } = require('./api');

// createSchoolType("przedszkole");
const a = async () => {
    const res = await getSchoolTypeList()
    console.log(res)
    return res
}
// console.log(getSchoolTypeList());
// const res = getSchoolTypeList().then(data => {});
// const res = a().then(res => res);
console.log(a());