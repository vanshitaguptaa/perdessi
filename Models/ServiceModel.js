import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema(
    {
        service_name:{
            type: String,
            required: true
        }
    }
)

const Servicemodel = mongoose.model("services",ServiceSchema,"services");
export default Servicemodel;