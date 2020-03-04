const { sequelize } = require("../../db/db_config");
const schoolTypeFactory = require("../factories/schoolTypeFactory");
const truncate = require("../truncate");
const { SchoolType } = require("../../db/models");

describe("SchoolType model", () => {
  beforeEach(async () => {
    await truncate(SchoolType);
  });

  afterEach(async () => {
    await truncate(SchoolType);
  });

  afterAll(async () => {
    await SchoolType.drop();
  });

  it("should be created", async () => {
    const schoolType = await sequelize
      .sync({ force: true })
      .then(() => schoolTypeFactory("mock school type"));

    expect(schoolType).toBeTruthy();
    expect(schoolType.dataValues.name).toBe("mock school type");
  });
});
