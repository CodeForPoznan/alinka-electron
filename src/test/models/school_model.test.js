const { sequelize } = require("../../db/db_config");
const schoolFactory = require("../factories/schoolFactory");
const {schoolData} = require("../factories/schoolFactory");
const schoolTypeFactory = require("../factories/schoolTypeFactory");
const truncate = require("../truncate");
const { School, SchoolType } = require("../../db/models");

describe("School model", () => {

  beforeEach(async () => {
    await truncate([School, SchoolType]);
    await schoolTypeFactory("przedszkole")
  });
  
  afterEach(async () => {
    await truncate([School, SchoolType]);
  });

  it("should be created", async () => {
    const school = await sequelize
      .sync({ force: true })
      .then(() => schoolFactory({ name: "TEST", type: "przedszkole" }));

    expect(school).toBeTruthy();
    expect(school.dataValues.name).toBe("TEST");
  });

  it("should return concatenated data by calling `address`", async () => {
    const school = await sequelize
      .sync({ force: true })
      .then(() => schoolFactory({ street: "TEST STREET", type: "przedszkole" }));
      
      expect(school).toBeTruthy();
      expect(school.dataValues.address).toBe("TEST STREET");
  });
});
