import mongoose from "mongoose";


const GoldLoanSchema = new mongoose.Schema({
    Aadharcard: {
        type: String
    },
    Pancard: {
        type: String
    }
})


const GoldLoanModel = mongoose.model("GoldLoan", GoldLoanSchema);


export default GoldLoanModel;