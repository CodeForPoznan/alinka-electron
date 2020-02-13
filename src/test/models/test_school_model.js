const { sequelize } = require("../../db/db_config");
const schoolFactory = require("../factories/schoolFactory");
const truncate = require("../truncate");
const { School } = require("../../db/models");

describe("School model", () => {
  beforeEach(async () => {
    await truncate(School);
  });

  afterEach(async () => {
    await truncate(School);
  });

  it("should be created", async () => {
    const school = await sequelize
      .sync({ force: true })
      .then(() => schoolFactory({ name: "TEST" }));

    expect(school).toBeTruthy();
    expect(school.dataValues.name).toBe("TEST");
  });
});
