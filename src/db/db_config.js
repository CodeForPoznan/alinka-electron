const knex = require('knex')({
    client: 'sqlite3',
    connection: {
        filename: '../alinka.db'
    },
    useNullAsDefault: true
});

knex.schema.createTable('schooltypes', function(table) {
    table.increments('id').primary();
    table.string('type');
}).then( function() {
    console.log("Table was created")
}).catch( function() {
    console.log("Table already exists")
});

module.exports.knex = knex;