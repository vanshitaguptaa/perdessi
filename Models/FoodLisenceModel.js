import mongoose from "mongoose";

const FoodLisenceSchema = new mongoose.Schema({
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
  NRMOfLisence: {
    type: String,
  },
  NewRegistration: {
    type: String,
  },
  ProprietorshipDeclaration: {
    type: String,
  },
  CSGWNocNoted: {
    type: String,
  },
  OnlineSaleOfAlcohol: {
    type: String,
  },
  AdditionalDocumentForExpoters: {
    type: String,
  },
  SampleFoodRecallPlanAndGuide: {
    type: String,
  },
  BISLiscense: {
    type: String,
  },
  Repacker: {
    type: String,
  },
});

const FoodLisenceModel = mongoose.model("FoodLisence", FoodLisenceSchema);

export default FoodLisenceModel;
