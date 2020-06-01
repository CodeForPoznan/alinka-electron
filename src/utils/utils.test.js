import commonData from "../docx/fixtures";
import { DocumentData } from "./utils.js";

describe("DocumentData", () => {
  let applicantsFixture, commonDataFixture, expectedApplicants;
  beforeEach(() => {
    commonDataFixture = Object.assign({}, commonData);
    expectedApplicants = [
      {
        address: "MockAddress1",
        firstName: "MockFirstName1",
        lastName: "MockLastName1",
        postalCode: "MockPostalCode1",
        city: "MockCity1"
      },
      {
        firstName: "MockFirstName2",
        lastName: "MockLastName2",
        address: "MockAddress2",
        postalCode: "MockPostalCode2",
        city: "MockCity2"
      }
    ];
    applicantsFixture = {
      applicant: {
        firstName1: "MockFirstName1",
        lastName1: "MockLastName1",
        address1: "MockAddress1",
        postalCode1: "MockPostalCode1",
        city1: "MockCity1",
        firstName2: "MockFirstName2",
        lastName2: "MockLastName2",
        address2: "MockAddress2",
        postalCode2: "MockPostalCode2",
        city2: "MockCity2"
      }
    };
  });

  it("can be created", () => {
    const documentData = new DocumentData({});
    expect(documentData).toBeInstanceOf(DocumentData);
  });

  it("can get template data", () => {
    const documentData = new DocumentData(commonDataFixture).templateData;
    expect(documentData).toBeDefined();
  });

  it("return single parent data", () => {
    const expectedParentsData =
      "MockFirstName1 MockLastName1, MockAddress1, MockPostalCode1 MockCity1";
    applicantsFixture.applicant.firstName2 = "";
    const onRequest = "MockFirstName1 MockLastName1";
    expectedApplicants.pop();
    Object.assign(commonDataFixture, applicantsFixture);

    const documentData = new DocumentData(commonDataFixture).templateData;

    expect(documentData.applicant.parentsDescription).toBe(expectedParentsData);
    expect(documentData.applicant.onRequest).toBe(onRequest);
    expect(documentData.applicant.applicants).toEqual(expectedApplicants);
  });

  it("return multiple parents data with the same address", () => {
    const expectedParentsData =
      "MockFirstName1 MockLastName1 i MockFirstName2 MockLastName2, MockAddress1, MockPostalCode1 MockCity1";
    const onRequest =
      "MockFirstName1 MockLastName1 i MockFirstName2 MockLastName2";
    applicantsFixture.applicant.addresFirstParentCheckbox = true;
    Object.assign(commonDataFixture, applicantsFixture);
    const documentData = new DocumentData(commonDataFixture).templateData;

    expect(documentData.applicant.parentsDescription).toBe(expectedParentsData);
    expect(documentData.applicant.onRequest).toBe(onRequest);
    expect(documentData.applicant.applicants).toEqual(expectedApplicants);
  });

  it("return multiple parents data with different address", () => {
    const expectedParentsData =
      "MockFirstName1 MockLastName1, MockAddress1, MockPostalCode1 MockCity1 i MockFirstName2 MockLastName2, MockAddress2, MockPostalCode2 MockCity2";
    const onRequest =
      "MockFirstName1 MockLastName1 i MockFirstName2 MockLastName2";
    Object.assign(commonDataFixture, applicantsFixture);
    const documentData = new DocumentData(commonDataFixture).templateData;

    expect(documentData.applicant.parentsDescription).toBe(expectedParentsData);
    expect(documentData.applicant.onRequest).toBe(onRequest);
    expect(documentData.applicant.applicants).toEqual(expectedApplicants);
  });

  it("return reason in genetive form with single reason", () => {
    commonDataFixture.applicant["reason"] = "NIESLYSZACE";
    const documentData = new DocumentData(commonDataFixture).templateData;
    expect(documentData.applicant.reasonGenetive).toEqual("niesłyszenie");
  });

  it("return reason in genetive form with multiple reason", () => {
    commonDataFixture.applicant["reason"] = "LEKKIE";
    commonDataFixture.applicant["secondReason"] = "NIESLYSZACE";
    const documentData = new DocumentData(commonDataFixture).templateData;
    expect(documentData.applicant.reasonGenetive).toEqual(
      "niepełnosprawność intelektualną w stopniu lekkim i niesłyszenie"
    );
  });

  it("return only first reason if there's only one disability", () => {
    commonDataFixture.applicant["reason"] = "mock_reason";
    delete commonDataFixture.applicant["secondReason"];
    const documentData = new DocumentData(commonDataFixture).templateData;
    expect(documentData.applicant.reason).toBe("mock_reason");
  });

  it("return reason SPRZEZONE if there's more that one disability", () => {
    commonDataFixture.applicant["secondReason"] = "mock_second_reason";
    const documentData = new DocumentData(commonDataFixture).templateData;
    expect(documentData.applicant.reason).toBe("SPRZEZONA");
  });

  it("return list of disabilities if there are multiple disabilities", () => {
    commonDataFixture.applicant["reason"] = "LEKKIE";
    commonDataFixture.applicant["secondReason"] = "RUCHOWA";
    const expectedDisabilities = [
      "niepełnosprawne intelektualnie w stopniu lekkim",
      "niepełnosprawne ruchowo, w tym z afazją"
    ];
    const documentData = new DocumentData(commonDataFixture).templateData;
    expect(documentData.applicant.multipleDisability).toEqual(
      expectedDisabilities
    );
  });

  it("return list of team members", () => {
    const expectedMembers = [
      { name: "mock name1", function: "mock function1" },
      { name: "mock name2", function: "mock function2" }
    ];
    commonDataFixture.meeting["members"] = [
      { name: "mock name1", function: "mock function1" },
      { name: "mock name2", function: "mock function2" }
    ];
    const documentData = new DocumentData(commonDataFixture).templateData;
    expect(documentData.meeting.members).toEqual(expectedMembers);
  });

  it("return proper date of meeting", () => {
    commonDataFixture.meeting["date"] = "14.12.2020";
    const documentData = new DocumentData(commonDataFixture).templateData;
    expect(documentData.meeting.date).toEqual("14.12.2020");
  });

  it("return proper hour of meeting", () => {
    commonDataFixture.meeting["date"] = "9.15";
    const documentData = new DocumentData(commonDataFixture).templateData;
    expect(documentData.meeting.hour).toEqual("9.15");
  });
});
