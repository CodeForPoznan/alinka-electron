const { disabilityList, reasonsList } = require("../staticData");

const disabilityMap = new Map(
  disabilityList.map(disability => [disability.value, disability.textAdjective])
);
const disabilityGenetiveMap = new Map(
  disabilityList.map(disability => [disability.value, disability.textGenetive])
);
const issueGenetiveMap = new Map(
  reasonsList.map(reason => [reason.value, reason.descriptionGenetive])
);

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
    const firstReasonDescription = disabilityMap.get(
      this.values.applicant.reason
    );
    const secondReasonDescription = disabilityMap.get(
      this.values.applicant.secondReason
    );
    return [firstReasonDescription, secondReasonDescription];
  }

  get reasonGenetive() {
    if (!this.isMultipleDisability) {
      return disabilityGenetiveMap.get(this.values.applicant.reason);
    }
    const firstReasonGenetiveDescription = disabilityGenetiveMap.get(
      this.values.applicant.reason
    );
    const secondReasonGenetiveDescription = disabilityGenetiveMap.get(
      this.values.applicant.secondReason
    );
    return `${firstReasonGenetiveDescription} i ${secondReasonGenetiveDescription}`;
  }

  get applicantsList() {
    const { applicant } = this.values;
    const applicants = [
      {
        firstName: applicant.firstName1,
        lastName: applicant.lastName1,
        address: applicant.address1,
        postalCode: applicant.postalCode1,
        city: applicant.city1
      }
    ];
    if (applicant.firstName2) {
      applicants.push({
        firstName: applicant.firstName2,
        lastName: applicant.lastName2,
        address: applicant.address2,
        postalCode: applicant.postalCode2,
        city: applicant.city2
      });
    }
    return applicants;
  }

  get parentsDescription() {
    const { applicant } = this.values;
    if (!applicant.firstName2) {
      return `${applicant.firstName1} ${applicant.lastName1}, ${
        applicant.address1
      }, ${applicant.postalCode1} ${applicant.city1}`;
    }
    if (applicant.addresFirstParentCheckbox) {
      return `${applicant.firstName1} ${applicant.lastName1} i ${
        applicant.firstName2
      } ${applicant.lastName2}, ${applicant.address1}, ${
        applicant.postalCode1
      } ${applicant.city1}`;
    }
    return `${applicant.firstName1} ${applicant.lastName1}, ${
      applicant.address1
    }, ${applicant.postalCode1} ${applicant.city1} i ${applicant.firstName2} ${
      applicant.lastName2
    }, ${applicant.address2}, ${applicant.postalCode2} ${applicant.city2}`;
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
    return this.values.meeting.members;
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
        multipleDisability: this.multipleDisability,
        description: issueGenetiveMap.get(applicant.issue),
        reasonGenetive: this.reasonGenetive
      },
      no: this.values.no,
      parents: this.values.parents,
      school: this.values.school,
      meeting: {
        members: this.teamMembers,
        date: this.values.meeting.date,
        hour: this.values.meeting.hour
      },
      supportCenter: {
        address: supportCenter.address,
        nameNominative: supportCenter.nameNominative,
        nameGenetive: supportCenter.nameGenetive,
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
