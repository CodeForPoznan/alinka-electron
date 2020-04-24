const { sequelize } = require("../../db/db_config");
const schoolFactory = require("../factories/schoolFactory");
const schoolTypeFactory = require("../factories/schoolTypeFactory");
const { schoolData } = require("../factories/schoolFactory");
const { School } = require("../../db/models");

describe("School model", () => {
  beforeAll(() => {
    return sequelize
      .sync({ force: true })
      .then(() => schoolTypeFactory("mock"));
  });

  beforeEach(() => {
    // I know, this is the same as code in `beforeAll` but
    // this is temporary solution until problem with creating DB in tests should be resolved
    return sequelize
      .sync({ force: true })
      .then(() => schoolTypeFactory("mock"));
  });

  afterAll(async () => {
    await sequelize.drop();
  });

  it("should be created", async () => {
    const school = await School.create({ ...schoolData("mock"), name: "TEST" });

    expect(school).toBeTruthy();
    expect(school.name).toEqual("TEST");
  });

  it("should validate `postCode`", async () => {
    const school = await sequelize
      .sync({ force: true })
      .then(() =>
        schoolFactory({
          type: "mock",
          postCode: "invalid code",
          SchoolTypeName: "mock"
        })
      )
      .catch(err => err.message);

    expect(school).toEqual("Validation error: Invalid polish postal code");
  });

  describe("has virtual methods which", () => {
    it("return concatenated address data by calling `address`", async () => {
      const school = await schoolFactory({
        street: "Testowa 2",
        city: "Poznan",
        SchoolTypeName: "mock"
      });

      expect(school.address).toEqual("Poznan, Testowa 2");
    });

    it("return concatenated post data by calling `post`", async () => {
      const school = await schoolFactory({
        postCode: "12-345",
        postOffice: "Poznan",
        SchoolTypeName: "mock"
      });

      expect(school.post).toEqual("12-345 Poznan");
    });
  });
});
