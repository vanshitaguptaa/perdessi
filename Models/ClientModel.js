import mongoose from "mongoose";

const ClientSchema = new mongoose.Schema(
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
        email:{
            type: String,
            required: true
        },
        phone:{
            type: Number,
            required: true
        },
        gender:{
            type: String,
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
            type: Date,
            required: true
        },
        gst:{
            type: String,
            required: true
        },
        city:{
            type: String,
            required: true
        },
        state:{
            type: String,
            required: true
        },
        zip:{
            type: Number,
            required: true
        },
        empolyeeid:{
            type: mongoose.Schema.ObjectId,
            ref: 'employee',
            // required: true
        }
    }
)

const Clientmodel = mongoose.model("clients",ClientSchema,"clients");

export default Clientmodel;