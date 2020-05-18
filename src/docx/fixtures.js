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
    period: "pierwszy etap edukacyjny",
    reason: "SPRZEZONA",
    multipleDisability: [
      "niesłyszące",
      "niepełnosprawne intelektualnie w stopniu znacznym"
    ]
  },
  REWALIDACYJNE: {
    period: "5-ciu lat.",
    activityForm: "INDYWIDUALNE"
  },
  OPINIA: {
    period: "do rozpoczęcia spełniania obowiązku szkolnego"
  }
};

var commonData = {
  child: {
    name: "Wiktor Rzeźniczak",
    pesel: "12121244441",
    birthPlace: "Pachy Wielkie",
    city: "Poznań",
    postalCode: "61-854",
    street: "Mostowa 38",
    houseNumber: "4",
    schoolType: "Szkoła podstawowa",
    schoolName: "Szkoła Podstawowa nr 4 w Grodzisku Wlkp.",
    profession: "murarz",
    class: "3b",
    address: "55-789 Studnia, Wielka 4/6",
    birthDate: "12.12.1912"
  },
  applicant: {
    firstName1: "Tomasz",
    lastName1: "Rzeźniczak",
    address1: "Wielka 4/6",
    postalCode1: "55-789 Studnia",
    addressChildcheCkbox: false,
    firstName2: "Adelajda",
    lastName2: "Słoneczko",
    address2: "Odnowy Stare, ul. Zamkowa 15/6a",
    postalCode2: "15-671 Sadowisko",
    addresFirstParentCheckbox: false,
    name: "Tomasz Rzeźniczak i Adelajda Kieł",
    names: ["Tomasz Rzeźniczak", "Adelajda Kieł"],
    city: "Poznań",
    postalCode: "61-854",
    street: "Mostowa 38",
    houseNumber: "4",
    issue: "INDYWIDUALNE",
    period: "styczeń 2018 - listopad 2019",
    reason: "ZNACZNIE_UTRUDNIAJACY"
  },
  city: "Grodzisk Wielkopolski",
  date: "15.07.2019",
  no: "42",
  parents: {
    address: "65-898 Ugody, Zielona 29b/5",
    name: "Tomasz Rzeźniczak i Adelajda Kieł"
  },
  school:
    "Szkoła Podstawowa nr 4 w Grodzisku Wlkp., szkoła podstawowa, 62-065 Grodzisk Wlkp., ul. Środkowa 56, murarz, 5a",
  supportCenter: {
    address: "ul. Zbąszyńska 11",
    members: [
      {
        name: "Antoni Stąsz-Lebieź",
        function: "przewodniczący zespołu"
      },
      {
        name: "mgr Leonia Witek-Konuś",
        function: "psycholog, tyflopedagog"
      },
      {
        name: "mgr Eleonora Roseveelt",
        function: "socjoterapeuta, tyflopedagog"
      }
    ],
    nameNominative: "Poradnia Psychologiczno - Pedagogiczna we Wrześni",
    nameGenetive: "Poradni Psychologiczno-Pedagogicznej we Wrześni",
    instituteName:
      "Zespół Orzekający przy Poradni Psychologiczno-Pedagogicznej w Grodzisku Wlkp.",
    post: "62-065 Grodzisk Wlkp.",
    city: "Poznań",
    postalCode: "61-854",
    street: "Mostowa 38"
  },
  kurator: "w Poznaniu, ul Kościuszki 38, 64-400 Poznań"
};

const documentType = process.argv[2];

Object.assign(commonData, specificData[documentType]);

export default commonData;
