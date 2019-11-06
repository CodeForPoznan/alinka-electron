const knex = require('./db_config').knex;
const SchoolType = require("./models");

const createSchoolType = (schoolType) => {
  return new SchoolType({
    type: schoolType
  }).save();
};

getSchoolTypeList = () => {
  return SchoolType.getSchoolTypeList();
}



//   SchoolType.fetchAll().then(function(data) {
//     data = data.toJSON();
//     res.send(data);
//   })
//   .catch((err) => {
//     console.log(err)
//   })

// }

module.exports = { createSchoolType, getSchoolTypeList }
// async function fetch_city() {

//     try {

//         let val = await City.where({ 'name': 'Bratislava' }).fetch({require:true});
//         // console.log(val.toJSON());
//         logger.info(val);
//     } catch (e) {

//         logger.info(`No data found ${e}`);
//     } finally {

//         knex.destroy();
//     }
// }