import mongoose from "mongoose";

const ShopActSchema = new mongoose.Schema({
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
  AdharCard: {
    type: String,
  },
  PanCard: {
    type: String,
  },
  DetailsOfBusiness: {
    type: String,
  },
  NatureOfBusiness: {
    type: String,
  },
  ElectricityBill: {
    type: String,
  },
  RentAgreement: {
    type: String,
  },
  MOA: {
    type: String,
  },
  AON: {
    type: String,
  },
  CIN: {
    type: String,
  },
});


const ShopActModel = mongoose.model("ShopAct", ShopActSchema);

export default ShopActModel;