const knex = require('./db_config').knex;
const bookshelf = require('bookshelf')(knex);


const SchoolType = bookshelf.Model.extend({
    tableName:"schooltypes",
}, {
    schoolTypeList: "", 
    getSchoolTypeList: async () => {
        const data =  await SchoolType.forge().fetchAll();
        return data.toJSON()
    }
})

module.exports = SchoolType;