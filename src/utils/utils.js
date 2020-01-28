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

class DocumentData {
  constructor (values) {
    this.values = values;
  }

  isMultipleDisability () {
    return Boolean(this.values.reason && this.values.secondReason)
  }

  reason () {
    if (this.isMultipleDisability) {
      return "SPRZEZONA"
    }
    return this.values.applicant.reason
  }

  multipleDisability () {
    if (!this.isMultipleDisability) {
      return []
    }
    const firstReasonDescription = disabilityMap[this.values.applicant.reason]
    const secondReasonDescription = disabilityMap[this.values.applicant.secondReason]
    return [firstReasonDescription, secondReasonDescription]
  }

  teamMembers () {
    return this.values.teamMembers
  }

  templateData () {
    return {
      child: {
        name: this.values.child.name,
        pesel: this.values.child.pesel,
        birthPlace: this.values.child.birthPlace,
        city: this.values.child.city,
        postalCode: this.values.child.postalCode,
        street: this.values.child.street,
        houseNumber: this.values.child.houseNumber,
        schoolType: this.values.child.schoolType,
        schoolName: this.values.child.schoolName,
        profession: this.values.child.profession,
        class: this.values.child.class,
        address: this.values.child.address,
        birthDate: this.values.child.birthDate
      },
      applicant: {
        address: this.values.applicant.address,
        name: this.values.applicant.name,
        city: this.values.applicant.city,
        postalCode: this.values.applicant.postalCode,
        street: this.values.applicant.street,
        houseNumber: this.values.applicant.houseNumber,
        issue: this.values.applicant.issue,
        period: this.values.applicant.period,
        reason: this.values.applicant.reason,
        multipleDisability: this.multipleDisability()
      },
      city: this.values.city,
      date: this.values.date,
      no: this.values.no,
      parents: {
        address: this.values.parents.address,
        name: this.values.parents.name
      },
      school: this.values.school,
      supportCenter: {
        address: this.values.supportCenter.address,
        members: this.teamMembers(),
        name: this.values.supportCenter.name,
        post: this.values.supportCenter.post,
        city: this.values.supportCenter.city,
        postalCode: this.values.supportCenter.postalCode,
        street: this.values.supportCenter.street
      },
      kurator: this.values.kurator
    }
  }
}

module.exports = {
  DocumentData
};
