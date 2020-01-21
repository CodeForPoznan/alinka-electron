const { sequelize } = require('../../db/db_config');
const schoolTypeFactory = require('../factories/schoolTypeFactory');
const truncate = require('../truncate');

console.log(sequelize)
// sequelize.close()

describe('SchoolType model', () => {
  beforeEach(async () => {
    await truncate();
  });

  afterEach(async () => {
    await truncate();
  });

  it('should be created', async () => {
    const schoolType = await schoolTypeFactory("mock school type");
    expect(schoolType)
    expect(schoolType.dataValues.schoolType).toBe("mock school type")
  });
});