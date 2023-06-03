import mongoose from "mongoose";

const GoldLoanSchema = new mongoose.Schema({
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
  Aadharcard: {
    type: String,
  },
  Pancard: {
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

const GoldLoanModel = mongoose.model("GoldLoan", GoldLoanSchema);

export default GoldLoanModel;
