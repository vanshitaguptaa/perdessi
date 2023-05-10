import mongoose from "mongoose";


const CarLoanSchema = new mongoose.Schema({
    SalariedIdentityProof: {
        type: String
    },
    SalariedAddressProof: {
        type: String
    },
    SalariedAgeProof: {
        type: String
    },
    SalariedBankStatement: {
        type: String
    },
    SalariedProofOfIncome: {
        type: String
    },
    SalariedSignatureVerificationProof: {
        type: String
    },
    SalariedProformaInvoice: {
        type: String
    },
    SelfEmployedIdentityProof: {
        type: String
    },
    SelfEmployeeAddressProof: {
        type: String
    },
    SelfEmployeeAgeProof: {
        type: String
    },
    SelfEmployeeBankStatement: {
        type: String
    },
    SelfEmployeeBusinessOwnership: {
        type: String
    },
    SelfEmployeeProofOIncome: {
        type: String
    },
    SelfEmployeeSignatureVerification: {
        type: String
    },
    SelfEmployeeProformaInvoice: {
        type: String
    }
});


const CarLoanModel = mongoose.model("CarLoan", CarLoanSchema);

module.exports = CarLoanModel;


