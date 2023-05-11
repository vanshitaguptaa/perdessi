import mongoose from "mongoose";

const GSTRegistrationSchema = new mongoose.Schema({
  service: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "services",
  },
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "clients",
  },
  employee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "employee",
  },
  LoanAmount: {
    type: Number,
  },
  IndividualPanCard: {
    type: String,
  },
  IndividualAdharCard: {
    type: String,
  },
  IndividualPhotograph: {
    type: String,
  },
  IndividualBankAccountDetails: {
    type: String,
  },
  IndividualAddress: {
    type: String,
  },
  HUFPanCard: {
    type: String,
  },
  AdharcardOfKartaHUF: {
    type: String,
  },
  HUFPhotographOfTheOwner: {
    type: String,
  },
  HUFBankAccountDetails: {
    type: String,
  },
  HUFAddressProof: {
    type: String,
  },
  CompanyPanCard: {
    type: String,
  },
  CompanyCertificateOfIncorporation: {
    type: String,
  },
  CompanyArticlesOfAssoication: {
    type: String,
  },
  CompanyPanCardOfAuthorizedSignature: {
    type: String,
  },
  CompanyAdharCardOfAuthorizedSignature: {
    type: String,
  },
  CompanyBoardresolutionappointingauthorizedsignatory: {
    type: String,
  },
  CompanyBankAccountDetails: {
    type: String,
  },
  CompanyAddressProof: {
    type: String,
  },
});

const GSTRegistrationModel = mongoose.model(
  "GSTRegistration",
  GSTRegistrationSchema
);

export default GSTRegistrationModel;
