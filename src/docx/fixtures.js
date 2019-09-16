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
  applicant: {
    address: "Wielka 4/6, 55-789 Studnia",
    name: "Tomasz Rzeźniczak i Adelajda Kieł"
  },
  child: {
    address: "55-789 Studnia, Wielka 4/6",
    birthDate: "12.12.1912",
    birthPlace: "Pachy Wielkie",
    name: "Wiktor Eridfasdfz2",
    pesel: "12121244441"
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
  period: "styczeń 2018 - listopad 2019",
  reason: "ZNACZNIE_UTRUDNIAJACY",
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
    name:
      "Zespół Orzekający przy Poradni Psychologiczno-Pedagogicznej w Grodzisku Wlkp.",
    post: "62-065 Grodzisk Wlkp."
  },
  kurator: "w Poznaniu, ul Kościuszki 38, 64-400 Poznań"
};

const documentType = process.argv[2];

Object.assign(commonData, specificData[documentType]);

export default commonData;
