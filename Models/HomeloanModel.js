import mongoose, { mongo } from "mongoose";

const homeLoanSchema = new mongoose.Schema({
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
  employeeIdentityCard: {
    type: String,
  },
  loanApplication: {
    type: String,
  },
  proofOfIdentity: {
    type: String,
  },
  proofOfResidency: {
    type: String,
  },
  permissionOfConstruction: {
    type: String,
  },
  registeredAgreementForSales: {
    type: String,
  },
  allotmentletter: {
    type: String,
  },
  stampedAgreement: {
    type: String,
  },
  occupancyCertificate: {
    type: String,
  },
  shareCertification: {
    type: String,
  },
  maintainanceBill: {
    type: String,
  },
  electricityBill: {
    type: String,
  },
  propertyTaxReceipt: {
    type: String,
  },
  approvedPlanCopyRegisteredDevelopmentAgreementofthebuilderConveyanceDeed: {
    type: String,
  },
  paymentMadetoBuilderRecept: {
    type: String,
  },
  sixMonthBankStatement: {
    type: String,
  },
  loanAccountStatement: {
    type: String,
  },
  threeMonthSalarySlip: {
    type: String,
  },
  twoYearOfFormsixteenOrItReturn: {
    type: String,
  },
  businessAddressProof: {
    type: String,
  },
  ThreeYearItReturn: {
    type: String,
  },
  businessLisenceDetail: {
    type: String,
  },
  TDScertification: {
    type: String,
  },
  certificationOfQualification: {
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

const HomeLoanModel = mongoose.model("Homeloan", homeLoanSchema);

export default HomeLoanModel;
