const { sequelize } = require("../../db/db_config");
const schoolTypeFactory = require("../factories/schoolTypeFactory");
const truncate = require("../truncate");

describe("SchoolType model", () => {
  beforeEach(async () => {
    await truncate();
  });

  afterEach(async () => {
    await truncate();
  });

  it("should be created", async () => {
    const schoolType = await sequelize
      .sync({ force: true })
      .then(() => schoolTypeFactory("mock school type"));
    expect(schoolType).toBeTruthy();
    expect(schoolType.dataValues.schoolType).toBe("mock school type");
  });
});
