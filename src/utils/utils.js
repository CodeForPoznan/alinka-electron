const disabilityMap = {
  LEKKIE: "niepełnosprawne intelektualnie w stopniu lekkim",
  UMIARKOWANE: "niepełnosprawne intelektualnie w stopniu umiarkowanym",
  ZNACZNE: "niepełnosprawne intelektualnie w stopniu znacznym",
  GŁĘBOKIE: "niepełnosprawne intelektualnie w stopniu głębokim",
  RUCHOWA: "niepełnosprawne ruchowo, w tym z afazją",
  SLABOSLYSZACE: "słabosłyszące",
  NIESLYSZACE: "niesłyszące",
  SLABOWIDZACE: "słabowidzące",
  NIEWIDZACE: "niewidzące",
  AUTYZM: "z autyzmem, w tym z zespołem Aspergera"
};

const calculateValues = values => {
  const reason = values.applicant.reason;
  let secondReason = values.applicant.secondReason;
  if (reason && secondReason) {
    const firstReason = disabilityMap[reason];
    secondReason = disabilityMap[secondReason];
    values.applicant.multipleDisability = [firstReason, secondReason];
    values.applicant.reason = "SPRZEZONA";
  }
  return values;
};

module.exports = {
  calculateValues
};
