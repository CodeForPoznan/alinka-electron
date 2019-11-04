const knex = require('./db_config').knex;
const bookshelf = require('bookshelf')(knex);


const SchoolType = bookshelf.Model.extend({
    tableName:"schooltypes"
})

module.exports = SchoolType;