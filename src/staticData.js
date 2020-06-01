const disabilityList = [
  {
    key: "x",
    text: "wybierz przyczynę...",
    textGenetive: "",
    textAdjective: "",
    value: "",
    multiple: false,
    disable: false
  },
  {
    key: "0",
    text: "niepełnosprawność intelektualna w stopniu lekkim",
    textGenetive: "niepełnosprawność intelektualną w stopniu lekkim",
    textAdjective: "niepełnosprawne intelektualnie w stopniu lekkim",
    value: "LEKKIE",
    multiple: true,
    disable: false
  },
  {
    key: "1",
    text: "niepełnosprawność intelektualna w stopniu umiarkowanym",
    textGenetive: "niepełnosprawność intelektualną w stopniu umiarkowanym",
    textAdjective: "niepełnosprawne intelektualnie w stopniu umiarkowanym",
    value: "UMIARKOWANE",
    multiple: true,
    disable: false
  },
  {
    key: "2",
    text: "niepełnosprawność intelektualna w stopniu znacznym",
    textGenetive: "niepełnosprawność intelektualną w stopniu znacznym",
    textAdjective: "niepełnosprawne intelektualnie w stopniu znacznym",
    value: "ZNACZNE",
    multiple: true,
    disable: false
  },
  {
    key: "3",
    text: "niepełnosprawność intelektualna w stopniu głębokim",
    textGenetive: "niepełnosprawność intelektualną w stopniu głębokim",
    textAdjective: "niepełnosprawne intelektualnie w stopniu głębokim",
    value: "GŁĘBOKIE",
    multiple: false,
    disable: false
  },
  {
    key: "4",
    text: "niepełnosprawność ruchowa, w tym z afazją",
    textGenetive: "niepełnosprawność ruchową, w tym z afazją",
    textAdjective: "niepełnosprawne ruchowo, w tym z afazją",
    value: "RUCHOWA",
    multiple: true,
    disable: false
  },
  {
    key: "5",
    text: "słabosłyszenie",
    textGenetive: "słabosłyszenie",
    textAdjective: "słabosłyszące",
    value: "SLABOSLYSZACE",
    multiple: true,
    disable: false
  },
  {
    key: "6",
    text: "niesłyszenie",
    textGenetive: "niesłyszenie",
    textAdjective: "niesłyszące",
    value: "NIESLYSZACE",
    multiple: true,
    disable: false
  },
  {
    key: "7",
    text: "słabowidzenie",
    textGenetive: "słabowidzenie",
    textAdjective: "słabowidzące",
    value: "SLABOWIDZACE",
    multiple: true,
    disable: false
  },
  {
    key: "8",
    text: "niewidzenie",
    textGenetive: "niewidzenie",
    textAdjective: "niewidzące",
    value: "NIEWIDZACE",
    multiple: true,
    disable: false
  },
  {
    key: "9",
    text: "autyzm w tym zespół Aspergera",
    textGenetive: "autyzm w tym zespół Aspergera",
    textAdjective: "z autyzmem, w tym z zespołem Aspergera",
    value: "AUTYZM",
    multiple: true,
    disable: false
  },
  {
    key: "10",
    text: "stan zdrowia uniemożliwiający uczęszczanie do szkoły",
    textGenetive: "stan zdrowia uniemożliwiający uczęszczanie do szkoły",
    textAdjective: "",
    value: "UNIEMOZLIWIAJACY",
    multiple: false,
    disable: false
  },
  {
    key: "11",
    text: "stan zdrowia znacznie utrudniający uczęszczanie do szkoły",
    textGenetive: "stan zdrowia znacznie utrudniający uczęszczanie do szkoły",
    textAdjective: "",
    value: "ZNACZNIE_UTRUDNIAJACY",
    multiple: false,
    disable: false
  },
  {
    key: "12",
    text: "zagrożenie niedostosowaniem społecznym",
    textGenetive: "zagrożenie niedostosowaniem społecznym",
    textAdjective: "",
    value: "ZAGROŻENIE",
    multiple: false,
    disable: false
  },
  {
    key: "13",
    text: "niedostosowanie społeczne",
    textGenetive: "niedostosowanie społeczne",
    textAdjective: "",
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
    descriptionGenetive: "",
    disable: false,
    allowMultiple: false,
    excludedDisabilities: []
  },
  {
    key: "0",
    text: "Kształcenie specjalne",
    value: "SPECJALNE",
    descriptionGenetive: "orzeczenia o potrzebie kształcenia specjalnego",
    disable: false,
    allowMultiple: true,
    excludedDisabilities: ["UNIEMOZLIWIAJACY", "ZNACZNIE_UTRUDNIAJACY"]
  },
  {
    key: "1",
    text: "Indywidualne nauczanie",
    value: "INDYWIDUALNE",
    descriptionGenetive: "orzeczenia o potrzebie indywidualnego nauczania",
    disable: false,
    allowMultiple: false,
    excludedDisabilities: []
  },
  {
    key: "2",
    text: "Indywidualne roczne przygotowanie przedszkolne",
    value: "INDYWIDUALNE_ROCZNE",
    descriptionGenetive:
      "orzeczenia o potrzebie indywidualnego rocznego przygotowania przedszkolnego",
    disable: false,
    allowMultiple: false,
    excludedDisabilities: []
  },
  {
    key: "3",
    text: "Zajęcia rewalidacyjne",
    value: "REWALIDACYJNE",
    descriptionGenetive:
      "orzeczenia o potrzebie zajęć rewalidacyjno - wychowawczych",
    disable: false,
    allowMultiple: false,
    excludedDisabilities: []
  },
  {
    key: "4",
    text: "Opinia o potrzebie wczesnego wspomagania rozwoju dziecka",
    value: "OPINIA",
    descriptionGenetive: "opinii o potrzebie wczesnego wspomagania rozwoju",
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

module.exports = { disabilityList, reasonsList, typeOfClasses };
