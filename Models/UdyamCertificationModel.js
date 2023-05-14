import mongoose from "mongoose";

const UdyamCertificateSchema = new mongoose.Schema({
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
  AdharCard: {
    type: String,
  },
  PanCard: {
    type: String,
  },
  BankAccountDetails: {
    type: String,
  },
  BusinessAdress: {
    type: String,
  },
  DetailsOfBusinessActivites: {
    type: String,
  },
  InformationOfTheInvestment: {
    type: String,
  },
  InformationOfTheTurnOver: {
    type: String,
  },
  DuplicateBillOfSale: {
    type: String,
  },
});

const UdyamCertificateModel = mongoose.model(
  "UdyamCertification",
  UdyamCertificateSchema
);

export default UdyamCertificateModel;
