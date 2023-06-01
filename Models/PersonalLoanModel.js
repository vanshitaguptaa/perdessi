import mongoose from "mongoose";

const PersonalLoanSchema = new mongoose.Schema({
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
  SalariedProofOfIdentity: {
    type: Object,
  },
  SalariedProofOfResidence: {
    type: Object,
  },
  SalariedThreeMonthsBankStatement: {
    type: Object,
  },
  SalariedThreeMonthSalarySlip: {
    type: Object,
  },
  SalariedTwoPassportPhoto: [
    {
      type: Object,
    },
  ],
  SelfEmployeedProofofIdentity: {
    type: Object,
  },
  SelfEmployeedProofofResidence: {
    type: Object,
  },
  SelfEmployeedIncomeProof: {
    type: Object,
  },
  SelfEmployeedSixMonthBankStatement: {
    type: Object,
  },
  SelfEmployeedOfficeAddressProof: {
    type: Object,
  },
  SelfEmployeedProofofContinuityofBusiness: {
    type: Object,
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

const PersonalLoanModel = mongoose.model("PersonalLoan", PersonalLoanSchema);

export default PersonalLoanModel;
