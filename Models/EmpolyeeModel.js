import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema(
    {
        first_name: {
            type: String,
            required: true
        },
        last_name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        number: {
            type: Number,
            required: true
        },
        adharno: {
            type: Number,
            required: true
        },
        joiningdate: {
            type: Date,
            required: true
        },
        dob: {
            type: Date,
            required: true
        },
        password: {
            type: String,
            required: true,
        },
        reportto: {
            type: String
        },
        address: {
            type: String,
            required: true,
        },
        gender: {
            type: String,
            required: true,
        },
        nationality: {
            type: String,
            required: true,
        },
        religion: {
            type: String,
            required: true,
        },
        martialStatus: {
            type: String,
            required: true,
        },
        // emergerncy contact details
        emergencyContactName: {
            type: String,
            required: true,
        },
        emergencyContactRelationship: {
            type: String,
            required: true,
        },
        EmergencyContactNumber: {
            type: Number,
            required: true
        },
        // Account details 
        BankName: {
            type: String,
            required: true
        },
        BranchName: {
            type: String,
            required: true
        },
        IFSCcode: {
            type: String,
            required: true
        },
        ACholdername: {
            type: String,
            required: true
        },
        BankAccNo: {
            type: Number,
            required: true
        },
        PanNo: {
            type: String,
            required: true
        },
        role: {
            type: String,
            required: true,
            default: "empolyee"
        }
    },
    { timestamps: true }
)

export const employeeModel = mongoose.model("employee", employeeSchema, "employee");