import Clientmodel from "../Models/ClientModel.js";
import * as cron from "node-cron";
import nodemailer from "nodemailer";
import { SendBirthdaymail } from "./Sendingmail.js";

export const Addclientctrl = async (req, resp) => {
  try {
    const {
      first_name,
      middlename,
      last_name,
      email,
      phone,
      pan,
      aadhar,
      gst,
      city,
      state,
      zip,
      dob,
      gender,
    } = req.body;

    if (
      !first_name ||
      !middlename ||
      !last_name ||
      !email ||
      !phone ||
      !pan ||
      !aadhar ||
      !gst ||
      !city ||
      !state ||
      !zip ||
      !dob ||
      !gender
    ) {
      return resp.status(422).json({
        status: false,
        message: "Please provide all the required field",
      });
    }

    const existingEmail = await Clientmodel.findOne({ email: email });
    const existingPhone = await Clientmodel.findOne({ phone: phone });
    const existingPanOrAdhar = await Clientmodel.findOne({
      $or: [{ pan: pan }, { aadhar: aadhar }],
    });

    if (existingEmail) {
      return resp
        .status(422)
        .json({ status: false, message: "Client Email Already exists" });
    }

    if (existingPhone) {
      return resp.status(422).json({
        status: false,
        message: "Client Mobile number is Already exists",
      });
    }

    if (existingPanOrAdhar) {
      return resp.status(422).json({
        status: false,
        mesage: "Client Adhar or Pan Number Already Exists",
      });
    }

    const newClient = new Clientmodel({
      first_name: first_name,
      middle_name: middlename,
      last_name: last_name,
      email: email,
      phone: phone,
      pan: pan,
      aadhar: aadhar,
      gst: gst,
      city: city,
      state: state,
      zip: zip,
      dob: dob,
      gender: gender,
      empolyeeid: req.user._id,
    });

    const savedResponse = await newClient.save();

    if (savedResponse) {
      return resp.status(201).json({
        status: true,
        message: "Client successfully created",
        savedClientData: newClient,
      });
    }
  } catch (error) {
    console.log(error);
    return resp
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const SendMAilTOAllctrl = async (req, resp) => {
  try {
    const already = await Clientmodel.find({});
    const { Subject, Mail } = req.body;

    already.map((d) => {
      let config = {
        service: "gmail",
        secure: true,
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD,
        },
      };

      let transporter = nodemailer.createTransport(config);

      let message = {
        from: process.env.EMAIL,
        to: d.email,
        subject: Subject,
        text: Mail,
        html: `<b>${Mail}</b>`,
      };
      //***** Sending Mail ******//

      transporter.sendMail(message);

      return resp.status(201).json({
        status: true,
        message: "Mail Just Send to All Client",
      });
    });
  } catch (error) {
    console.log(error);
    return resp
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const getClientForCurrentUser = async (req, resp) => {
  try {
    let employeeId = req.user._id;

    const savedClient = await Clientmodel.find({
      empolyeeid: employeeId,
    }).populate("empolyeeid");

    if (savedClient < 1) {
      return resp
        .status(401)
        .json({ status: false, message: "current employee has no client" });
    }

    return resp.status(201).json({
      status: true,
      message: "successfully fetched client for current employeee",
      clients: savedClient,
    });
  } catch (error) {
    console.log(error);
    return resp
      .status(522)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const MyClintsctrl = async (req, resp) => {
  try {
    const already = await Clientmodel.find({
      empolyeeid: req.params.id,
    }).populate({
      path: "empolyeeid",
      select: "first_name last_name email",
    });
    if (already) {
      return resp.status(200).send({
        Succes: true,
        already,
      });
    }
  } catch (error) {
    resp.status(500).send({
      success: false,
      message: "Data Not Fatched",
    });
  }
};

export const EditClintsctrl = async (req, resp) => {
  try {
    const already = await Clientmodel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (already) {
      return resp.status(200).send({
        Succes: true,
        already,
      });
    }
  } catch (error) {
    resp.status(500).send({
      success: false,
      message: "Data Not Fatched",
    });
  }
};

export const GetAllClintsctrl = async (req, resp) => {
  try {
    const already = await Clientmodel.find().populate({
      path: "empolyeeid",
      select: "first_name last_name email",
    });
    if (already) {
      return resp.status(200).send({
        Succes: true,
        already,
      });
    }
  } catch (error) {
    resp.status(500).send({
      success: false,
      message: "Data Not Fatched",
    });
  }
};

cron.schedule("0 0 0 * * *", async () => {
  const datee = new Date();
  const today = datee.getDate();
  const thismonth = datee.getMonth() + 1;
  try {
    const already = await Clientmodel.find({});
    already.map((d) => {
      let clientdob = d.dob;
      let clientdate = clientdob.getDate();
      let clientmonth = clientdob.getMonth() + 1;
      if (clientdate == today && clientmonth == thismonth) {
        SendBirthdaymail(d.email);
      }
    });
  } catch (error) {
    console.log("function is not WORKING!!!");
  }
});
