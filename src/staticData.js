const disabilityList = [
  {
    key: "x",
    text: "wybierz przyczynę...",
    value: ""
  },
  {
    key: "0",
    text: "niepełnosprawność intelektualna w stopniu lekkim",
    value: "LEKKIE"
  },
  {
    key: "1",
    text: "niepełnosprawność intelektualna w stopniu umiarkowanym",
    value: "UMIARKOWANE"
  },
  {
    key: "2",
    text: "niepełnosprawność intelektualna w stopniu znacznym",
    value: "ZNACZNE"
  },
  {
    key: "3",
    text: "niepełnosprawność intelektualna w stopniu głębokim",
    value: "GŁĘBOKIE"
  },
  {
    key: "4",
    text: "niepełnosprawne ruchowo, w tym z afazją",
    value: "RUCHOWA"
  },
  {
    key: "5",
    text: "słabosłyszenie",
    value: "SLABOSLYSZACE"
  },
  {
    key: "6",
    text: "niesłyszenie",
    value: "NIESLYSZACE"
  },
  {
    key: "7",
    text: "słabowidzenie",
    value: "SLABOWIDZACE"
  },
  {
    key: "8",
    text: "niewidzenie",
    value: "NIEWIDZACE"
  },
  {
    key: "9",
    text: "autyzm w tym zespół Aspergera",
    value: "AUTYZM"
  },
  {
    key: "10",
    text: "stan zdrowia uniemożliwiający uczęszczanie do szkoły",
    value: "UNIEMOZLIWIAJACY"
  },
  {
    key: "11",
    text: "stan zdrowia znacznie utrudniający uczęszczanie do szkoły",
    value: "ZNACZNIE_UTRUDNIAJACY"
  },
  {
    key: "12",
    text: "zagrożenie niedostosowaniem społecznym",
    value: "ZAGROŻENIE"
  },
  {
    key: "13",
    text: "niedostosowanie społeczne",
    value: "NIEDOSTOSOWANIE"
  }
];

const reasonsList = [
  {
    key: "x",
    text: "Wybierz rodzaj wniosku...",
    value: "WYBIERZ_WNIOSEK",
    disabilityListItems: disabilityList
  },
  {
    key: "0",
    text: "Kształcenie specjalne",
    value: "SPECJALNE",
    disabilityListItems: disabilityList.filter(
      el => !["UNIEMOZLIWIAJACY", "ZNACZNIE_UTRUDNIAJACY"].includes(el.value)
    )
  },
  {
    key: "1",
    text: "Indywidualne nauczanie",
    value: "INDYWIDUALNE",
    disabilityListItems: disabilityList
  },
  {
    key: "2",
    text: "Indywidualne roczne przygotowanie przedszkolne",
    value: "INDYWIDUALNE_ROCZNE",
    disabilityListItems: disabilityList
  },
  {
    key: "3",
    text: "Zajęcia rewalidacyjne",
    value: "REWALIDACYJNE",
    disabilityListItems: disabilityList
  },
  {
    key: "4",
    text: "Opinia o potrzebie wczesnego wspomagania rozwoju dziecka",
    value: "OPINIA",
    disabilityListItems: disabilityList
  }
];

export { reasonsList, disabilityList };
