import mongoose from "mongoose";

const BusinesLoanSchema = new mongoose.Schema({
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
  PanCard: {
    type: String,
  },
  IdentityProof: {
    type: String,
  },
  AddressProof: {
    type: String,
  },
  SixMonthBankStatement: {
    type: String,
  },
  LatestITR: {
    type: String,
  },
  ProofOfContinuationITR: {
    type: String,
  },
  ProofOfContinuationTradeLiscense: {
    type: String,
  },
  ProofOfContinuationEstablishment: {
    type: String,
  },
  ProofOfContinuationSalesTax: {
    type: String,
  },
  PropDeclaration: {
    type: String,
  },
  PartnershipDeed: {
    type: String,
  },
  TrueCopyMemorandum: {
    type: String,
  },
  TrueCopyArticleofAssociation: {
    type: String,
  },
  TrueCopyBoardResolution: {
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
  },
  L_ID: {
    type: Number,
    required: true,
  }
},
{ timestamps: true }
);

const BusinessLoanModel = mongoose.model("BusinessLoan", BusinesLoanSchema);

export default BusinessLoanModel;
