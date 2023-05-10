import mongoose from "mongoose";

const LeadSchema = new mongoose.Schema(
    {
        first_name:{
            type: String,
            required: true
        },
        middle_name:{
            type: String,
        },
        last_name:{
            type: String,
            required: true
        },
        title:{
            type: String,
            required: true
        },
        phone:{
            type: Number,
            required: true
        },
        pan:{
            type: String,
            required: true
        },
        aadhar:{
            type: Number,
            required: true
        },
        dob:{
            type: Number,
            required: true
        },
        gender:{
            type: String,
            required: true
        },
        zip:{
            type: Number,
            required: true
        },
        empolyeeid:{
            type: mongoose.Schema.ObjectId,
            ref: 'employee'
        },
        serviceid:{
            type: mongoose.Schema.ObjectId,
            ref: 'services'
        }
    }
)

const Leadmodel = mongoose.model("leads",LeadSchema,"leads");
export default Leadmodel;