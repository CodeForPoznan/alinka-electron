const commonData = require("./fixtures");

const specificData = {
  INDYWIDUALNE: {
    period: "styczeń 2018 - listopad 2019",
    reason: "ZNACZNIE_UTRUDNIAJACY"
  },
  INDYWIDUALNE_ROCZNE: {
    period: "12.05.2018 - 25.12.2019",
    reason: "UNIEMOZLIWIAJACY"
  },
  SPECJALNE: {
    issue: "SPECJALNE",
    period: "pierwszy etap edukacyjny",
    reason: "NIESLYSZACE",
    secondReason: "ZNACZNE"
  },
  REWALIDACYJNE: {
    period: "5-ciu lat.",
    activityForm: "INDYWIDUALNE"
  },
  OPINIA: {
    period: "do rozpoczęcia spełniania obowiązku szkolnego"
  }
};

const getSpecificData = documentType => {
  Object.assign(commonData.applicant, specificData[documentType]);
  return commonData;
};

module.exports = { getSpecificData };
