import mongoose from "mongoose";

const CreditCardSchema = new mongoose.Schema({
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
  AadharCard: {
    type: String,
  },
  PanCard: {
    type: String,
  },
  ThreeMonthsSalarySlip: {
    type: String,
  },
  SixMonthsBankStatement: {
    type: String,
  },
  FormSixteen: {
    type: String,
  },
});

const CreditCardModel = mongoose.model("CreditCardLoan", CreditCardSchema);

export default CreditCardModel;
