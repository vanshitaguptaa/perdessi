import mongoose from "mongoose";

const CarLoanSchema = new mongoose.Schema({
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
  SalariedIdentityProof: {
    type: String,
  },
  SalariedAddressProof: {
    type: String,
  },
  SalariedAgeProof: {
    type: String,
  },
  SalariedBankStatement: {
    type: String,
  },
  SalariedProofOfIncome: {
    type: String,
  },
  SalariedSignatureVerificationProof: {
    type: String,
  },
  SalariedProformaInvoice: {
    type: String,
  },
  SelfEmployedIdentityProof: {
    type: String,
  },
  SelfEmployeeAddressProof: {
    type: String,
  },
  SelfEmployeeAgeProof: {
    type: String,
  },
  SelfEmployeeBankStatement: {
    type: String,
  },
  SelfEmployeeBusinessOwnership: {
    type: String,
  },
  SelfEmployeeProofOIncome: {
    type: String,
  },
  SelfEmployeeSignatureVerification: {
    type: String,
  },
  SelfEmployeeProformaInvoice: {
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

const CarLoanModel = mongoose.model("CarLoan", CarLoanSchema);

export default CarLoanModel;
