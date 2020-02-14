const { sequelize } = require("../../db/db_config");
const schoolFactory = require("../factories/schoolFactory");
const schoolTypeFactory = require("../factories/schoolTypeFactory");
const truncate = require("../truncate");
const { School, SchoolType } = require("../../db/models");

describe("School model", () => {
  beforeEach(async () => {
    await truncate([School, SchoolType]);
    await SchoolType.sync({ force: true });
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
    expect(school.name).toEqual("TEST");
  });

  // it("should validate `postCode`", () => {
  //   const school = await sequelize
  //   .sync({ force: true })
  //   .then(() => schoolFactory({ name: "TEST", type: "przedszkole" }));
  // })

  describe("schould has virtual methods which", () => {
    it("return concatenated address data by calling `address`", async () => {
      const school = await sequelize
        .sync({ force: true })
        .then(() =>
          schoolFactory({
            street: "Testowa 2",
            city: "Poznan",
            type: "przedszkole"
          })
        );

      expect(school.address).toEqual("Poznan, Testowa 2");
    });

    it("return concatenated post data by calling `post`", async () => {
      const school = await sequelize
        .sync({ force: true })
        .then(() =>
          schoolFactory({
            postCode: "12-345",
            postOffice: "Poznan",
            type: "przedszkole"
          })
        );

      expect(school.post).toEqual("12-345 Poznan");
    });
  });
});
