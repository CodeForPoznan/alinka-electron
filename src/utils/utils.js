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
  constructor(values) {
    this.values = values;
  }

  isMultipleDisability() {
    return !!(
      this.values.applicant.reason && this.values.applicant.secondReason
    );
  }

  reason() {
    if (this.isMultipleDisability()) {
      return "SPRZEZONA";
    }
    return this.values.applicant.reason;
  }

  multipleDisability() {
    if (!this.isMultipleDisability) {
      return [];
    }
    const firstReasonDescription = disabilityMap[this.values.applicant.reason];
    const secondReasonDescription =
      disabilityMap[this.values.applicant.secondReason];
    return [firstReasonDescription, secondReasonDescription];
  }

  applicantsList() {
    const applicants = [
      {
        firstName: this.values.applicant.firstName1,
        lastName: this.values.applicant.lastName1,
        address: this.values.applicant.address1,
        postalCode: this.values.applicant.postalCode1
      }
    ];
    if (this.values.applicant.firstName2) {
      applicants.push({
        firstName: this.values.applicant.firstName2,
        lastName: this.values.applicant.lastName2,
        address: this.values.applicant.address2,
        postalCode: this.values.applicant.postalCode2
      });
    }
    return applicants;
  }

  parentsDescription() {
    const applicant = this.values.applicant;
    if (!applicant.firstName2) {
      return `${applicant.firstName1} ${applicant.lastName1}, ${
        applicant.address1
      }, ${applicant.postalCode1}`;
    }
    if (applicant.addresFirstParentCheckbox) {
      return `${applicant.firstName1} ${applicant.lastName1} i ${
        applicant.firstName2
      } ${applicant.lastName2}, ${applicant.address1}, ${
        applicant.postalCode1
      }`;
    }
    return `${applicant.firstName1} ${applicant.lastName1}, ${
      applicant.address1
    }, ${applicant.postalCode1} i ${applicant.firstName2} ${
      applicant.lastName2
    }, ${applicant.address2}, ${applicant.postalCode2}`;
  }

  onRequest() {
    const applicant = this.values.applicant;
    if (!applicant.firstName2) {
      return `${applicant.firstName1} ${applicant.lastName1}`;
    }
    return `${applicant.firstName1} ${applicant.lastName1} i ${
      applicant.firstName2
    } ${applicant.lastName2}`;
  }

  teamMembers() {
    return this.values.supportCenter.members;
  }

  templateData() {
    return {
      child: this.values.child,
      applicant: {
        applicants: this.applicantsList(),
        name: this.values.applicant.name,
        address: this.values.applicant.address,
        city: this.values.applicant.city,
        postalCode: this.values.applicant.postalCode,
        street: this.values.applicant.street,
        houseNumber: this.values.applicant.houseNumber,
        onRequest: this.onRequest(),
        parentsDescription: this.parentsDescription(),
        issue: this.values.applicant.issue,
        period: this.values.applicant.period,
        reason: this.reason(),
        multipleDisability: this.multipleDisability()
      },
      city: this.values.city,
      date: this.values.date,
      no: this.values.no,
      parents: this.values.parents,
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
    };
  }
}

module.exports = {
  DocumentData
};
