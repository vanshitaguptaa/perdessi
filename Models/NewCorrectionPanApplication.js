import mongoose from "mongoose";

const NewCorrectionPanApplication = new mongoose.Schema({
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
  ProofOfIdentity: {
    type: String,
  },
  ProofOfResidency: {
    type: String,
  },
  DateofBirthProof: {
    type: String,
  },
  isPending: {
    type: Boolean,
    default: true
  },
  isFailed: {
    type: Boolean,
    default: false
  },
  isSuccess: {
    type: Boolean,
    default: false
  }
},
{ timestamps: true }
);

const NewCorrectionPanApplicationModel = mongoose.model(
  "NewCorrectionPanApplication",
  NewCorrectionPanApplication
);

export default NewCorrectionPanApplicationModel;
