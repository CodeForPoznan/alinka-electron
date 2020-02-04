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

  get isMultipleDisability() {
    return !!(
      this.values.applicant.reason && this.values.applicant.secondReason
    );
  }

  get reason() {
    if (this.isMultipleDisability) {
      return "SPRZEZONA";
    }
    return this.values.applicant.reason;
  }

  get multipleDisability() {
    if (!this.isMultipleDisability) {
      return [];
    }
    const firstReasonDescription = disabilityMap[this.values.applicant.reason];
    const secondReasonDescription =
      disabilityMap[this.values.applicant.secondReason];
    return [firstReasonDescription, secondReasonDescription];
  }

  get applicantsList() {
    const { applicant } = this.values;
    const applicants = [
      {
        firstName: applicant.firstName1,
        lastName: applicant.lastName1,
        address: applicant.address1,
        postalCode: applicant.postalCode1
      }
    ];
    if (applicant.firstName2) {
      applicants.push({
        firstName: applicant.firstName2,
        lastName: applicant.lastName2,
        address: applicant.address2,
        postalCode: applicant.postalCode2
      });
    }
    return applicants;
  }

  get parentsDescription() {
    const { applicant } = this.values;
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

  get onRequest() {
    const { applicant } = this.values;
    if (!applicant.firstName2) {
      return `${applicant.firstName1} ${applicant.lastName1}`;
    }
    return `${applicant.firstName1} ${applicant.lastName1} i ${
      applicant.firstName2
    } ${applicant.lastName2}`;
  }

  get teamMembers() {
    return this.values.supportCenter.members;
  }

  get templateData() {
    const { applicant, supportCenter } = this.values;
    return {
      child: this.values.child,
      applicant: {
        applicants: this.applicantsList,
        name: applicant.name,
        address: applicant.address,
        city: applicant.city,
        postalCode: applicant.postalCode,
        street: applicant.street,
        houseNumber: applicant.houseNumber,
        onRequest: this.onRequest,
        parentsDescription: this.parentsDescription,
        issue: applicant.issue,
        period: applicant.period,
        reason: this.reason,
        multipleDisability: this.multipleDisability
      },
      city: this.values.city,
      date: this.values.date,
      no: this.values.no,
      parents: this.values.parents,
      school: this.values.school,
      supportCenter: {
        address: supportCenter.address,
        members: this.teamMembers,
        name: supportCenter.name,
        post: supportCenter.post,
        city: supportCenter.city,
        postalCode: supportCenter.postalCode,
        street: supportCenter.street
      },
      kurator: this.values.kurator
    };
  }
}

module.exports = { DocumentData };
