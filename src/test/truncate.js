const SchoolType = require('../db/models');

module.exports =  async function truncate() {
  SchoolType.destroy({ where: {}, force: true })
}