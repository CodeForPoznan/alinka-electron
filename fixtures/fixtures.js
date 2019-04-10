var studentData  = {
    firstName: "Enrique",
    lastName: "Johnson",
    pesel: "89121223444",
    addressOfStudent: "Malwowa 12a/22",
    cityOfStudent: "Poznań",
    postCodeOfStudent: "62-489",
    school: {
        nameOfSchool: "Szkoła Podstawowa nr 1",
        typeOfSchool: "Szkoła Podstawowa",
        adresOfSchool: "ul. Ratajczaka 15/19",
        cityOfSchool: "Poznań",
        postCode: "68-488",
        class: "IIIa",
        specialization: "murarz"
    }
}

var centerData = {
    centerCity: "Grodzisk Wlkp.",
    centerZipCode: "62-065",
    centerAdress: "ul. Zbąszyńska 11",
    centerNameNom: "Poradnia Psychologiczno-Pedagogiczna w Grodzisku Wlkp.",
    centerNameGen: "Poradnii Psychologiczno-Pedagogicznej w Grodzisku Wlkp."
}

var staffMeetingData = {
    stuffMeetingDate: "12.12.2018",
    staff = [
        {
            title: "mgr",
            name: "Wioleta Drapichrust",
            specialization: "pedagog"
        },
        {
            title: "dr",
            name: "Alojzy Bombel",
            specialization: "psycholog"
        },
        {
            title: "mgr",
            name: "Zenobia Wesoła",
            specialization: "surdopedagog, psycholog"
        },
        {
            title: "prof.",
            name: "Elżbieta Krótka",
            specialization: "tyflopedagog, logopeda"
        },
        {
            title: "lek.",
            name: "Jerzy Wróbel",
            specialization: "lekarz pediatra"
        }
    ]
}

var requestData = {
    onRequest: "Janina i Alojzy Iglesias",
    onRequestGen: "Janiny i Alojzego Iglesias",
    addressOfParents: "Malwowa 12a/22",
    cityOfParents: "Poznań",
    postCodeOfParents: "64-366",
    typeOfDecision: {
        name: "kształcenie specjalne",
        nameGen: "kształcenia specjalnego",
        reasons: [
            "niepełnosprawność intelektualna w stopniu lekkim", "niepełnosprawność ruchowa", "niedosłyszenie"
        ],
        timeSpan: "pierwszy etap edukacyjny",
    }
}


export { studentData, centerData, staffMeetingData, requestData } 