const disabilityList = [
  {
    key: "x",
    text: "wybierz przyczynę...",
    value: "",
    disable: true
  },
  {
    key: "0",
    text: "niepełnosprawność intelektualna w stopniu lekkim",
    value: "LEKKIE",
    multiple: true,
    disable: false
  },
  {
    key: "1",
    text: "niepełnosprawność intelektualna w stopniu umiarkowanym",
    value: "UMIARKOWANE",
    multiple: true,
    disable: false
  },
  {
    key: "2",
    text: "niepełnosprawność intelektualna w stopniu znacznym",
    value: "ZNACZNE",
    multiple: true,
    disable: false
  },
  {
    key: "3",
    text: "niepełnosprawność intelektualna w stopniu głębokim",
    value: "GŁĘBOKIE",
    multiple: false,
    disable: false
  },
  {
    key: "4",
    text: "niepełnosprawne ruchowo, w tym z afazją",
    value: "RUCHOWA",
    multiple: true,
    disable: false
  },
  {
    key: "5",
    text: "słabosłyszenie",
    value: "SLABOSLYSZACE",
    multiple: true,
    disable: false
  },
  {
    key: "6",
    text: "niesłyszenie",
    value: "NIESLYSZACE",
    multiple: true,
    disable: false
  },
  {
    key: "7",
    text: "słabowidzenie",
    value: "SLABOWIDZACE",
    multiple: true,
    disable: false
  },
  {
    key: "8",
    text: "niewidzenie",
    value: "NIEWIDZACE",
    multiple: true,
    disable: false
  },
  {
    key: "9",
    text: "autyzm w tym zespół Aspergera",
    value: "AUTYZM",
    multiple: true,
    disable: false
  },
  {
    key: "10",
    text: "stan zdrowia uniemożliwiający uczęszczanie do szkoły",
    value: "UNIEMOZLIWIAJACY",
    multiple: false,
    disable: false
  },
  {
    key: "11",
    text: "stan zdrowia znacznie utrudniający uczęszczanie do szkoły",
    value: "ZNACZNIE_UTRUDNIAJACY",
    multiple: false,
    disable: false
  },
  {
    key: "12",
    text: "zagrożenie niedostosowaniem społecznym",
    value: "ZAGROŻENIE",
    multiple: false,
    disable: false
  },
  {
    key: "13",
    text: "niedostosowanie społeczne",
    value: "NIEDOSTOSOWANIE",
    multiple: false,
    disable: false
  }
];

const reasonsList = [
  {
    key: "x",
    text: "Wybierz rodzaj wniosku...",
    value: "WYBIERZ_WNIOSEK",
    disable: true,
    allowMultiple: false,
    excludedDisabilities: []
  },
  {
    key: "0",
    text: "Kształcenie specjalne",
    value: "SPECJALNE",
    disable: false,
    allowMultiple: true,
    excludedDisabilities: ['UNIEMOZLIWIAJACY', 'ZNACZNIE_UTRUDNIAJACY']
  },
  {
    key: "1",
    text: "Indywidualne nauczanie",
    value: "INDYWIDUALNE",
    disable: false,
    allowMultiple: false,
    excludedDisabilities: []
  },
  {
    key: "2",
    text: "Indywidualne roczne przygotowanie przedszkolne",
    value: "INDYWIDUALNE_ROCZNE",
    disable: false,
    allowMultiple: false,
    excludedDisabilities: []
  },
  {
    key: "3",
    text: "Zajęcia rewalidacyjne",
    value: "REWALIDACYJNE",
    disable: false,
    allowMultiple: false,
    excludedDisabilities: []
  },
  {
    key: "4",
    text: "Opinia o potrzebie wczesnego wspomagania rozwoju dziecka",
    value: "OPINIA",
    disable: false,
    allowMultiple: false,
    excludedDisabilities: []
  }
];

const typeOfClasses = [
  {
    key: "1",
    text: "indywidualne",
    value: "INDYWIDUALNE"
  },
  {
    key: "2",
    text: "grupowe",
    value: "GRUPOWE"
  }
];

export { disabilityList, reasonsList, typeOfClasses };
