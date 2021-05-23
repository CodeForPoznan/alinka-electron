const { sequelize } = require("../../db/db_config");
const { School } = require("../../db/models");

const schoolMockData = {
  name:
    "SZKOŁA PODSTAWOWA Z ODDZIAŁAMI PRZEDSZKOLNYMI IM. JANUSZA KORCZAKA W BIELAWACH",
  city: "Bielawy",
  street: "",
  schoolTypeName: "Szkoła podstawowa",
  number: "3",
  postalCode: "62-066",
  postOffice: "Granowo"
};

describe("School model", () => {
  beforeAll(() => {
    return sequelize.sync({ force: true });
  });

  afterAll(async () => {
    await sequelize.drop();
  });

  it("should be created", async () => {
    const school = await School.create(schoolMockData);

    expect(school).toBeTruthy();
    expect(school.name).toEqual(schoolMockData.name);
  });

  it("should validate `postCode`", async () => {
    const testSchoolData = Object.assign({}, schoolMockData);
    testSchoolData.postalCode = "wrong postal code";
    const school = await School.create(testSchoolData).catch(
      err => err.message
    );

    expect(school).toEqual("Validation error: Invalid polish postal code");
  });

  describe("has virtual methods which", () => {
    it("return concatenated address data by calling `address`", async () => {
      const testSchoolData = Object.assign({}, schoolMockData);
      testSchoolData.street = "Testowa";
      testSchoolData.city = "Dummy City";

      const school = await School.create(testSchoolData);

      expect(school.address).toEqual("Dummy City, Testowa");
    });

    it("return concatenated post data by calling `post`", async () => {
      const testSchoolData = Object.assign({}, schoolMockData);
      testSchoolData.postalCode = "12-345";
      testSchoolData.postOffice = "Poznań";

      const school = await School.create(testSchoolData);

      expect(school.post).toEqual("12-345 Poznań");
    });
  });
});
