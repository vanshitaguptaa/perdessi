import mongoose from "mongoose";


const CreditCardSchema = new mongoose.Schema({
    AadharCard: {
        type: String
    },
    PanCard: {
        type: String
    },
    ThreeMonthsSalarySlip: {
        type: String
    },
    SixMonthsBankStatement: {
        type: String
    },
    FormSixteen: {
        type: String
    }
})


const CreditCardModel = mongoose.model("CreditCardLoan", CreditCardSchema);


export default CreditCardModel;