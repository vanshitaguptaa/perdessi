import HomeLoanModel from "../Models/HomeloanModel.js";
import BusinessLoanModel from "../Models/BusinessloanModel.js";
import PersonalLoanModel from "../Models/PersonalLoanModel.js";
import MortgageLoanModel from "../Models/MortgageLoanModel.js";
import GoldLoanModel from "../Models/GoldLoanModel.js";
import CreditCardModel from "../Models/CreditCardModel.js";
import CarLoanModel from "../Models/CarLoanModel.js";
import GSTLoanModel from "../Models/GSTRegistrationModel.js";
import NewCorrectionPanApplicationModel from "../Models/NewCorrectionPanApplication.js";
import PassportModel from "../Models/PassportModel.js";
import ShopActModel from "../Models/ShopActModel.js";
import UdyamCertificateModel from "../Models/UdyamCertificationModel.js";
import FoodLisenceModel from "../Models/FoodLisenceModel.js";

export const dashboardForTotolNumberofDocument = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ status: false, message: "Invalid Auth" });
    }
    const savedHomeLoanDocument = await HomeLoanModel.find({
      employee: req.user._id,
    }).countDocuments();
    const savedBusiessLoanDocument = await BusinessLoanModel.find({
      employee: req.user._id,
    }).countDocuments();
    const savedPersonalLoanDocument = await PersonalLoanModel.find({
      employee: req.user._id,
    }).countDocuments();
    const savedMortgageLoanDocument = await MortgageLoanModel.find({
      employee: req.user._id,
    }).countDocuments();
    const savedGoldLoanDocument = await GoldLoanModel.find({
      employee: req.user._id,
    }).countDocuments();
    const savedCreditCardDocument = await CreditCardModel.find({
      employee: req.user._id,
    }).countDocuments();
    const savedCarLoanDocument = await CarLoanModel.find({
      employee: req.user._id,
    }).countDocuments();
    const savedGSTLoanDocument = await GSTLoanModel.find({
      employee: req.user._id,
    }).countDocuments();
    const savedPassportLoanDocument = await PassportModel.find({
      employee: req.user._id,
    }).countDocuments();
    const savedNewCorrectionPanDocument =
      await NewCorrectionPanApplicationModel.find({
        employee: req.user._id,
      }).countDocuments();
    const savedShopActDocument = await ShopActModel.find({
      employee: req.user._id,
    }).countDocuments();
    const savedUdyamCertificateDocument = await UdyamCertificateModel.find({
      employee: req.user._id,
    }).countDocuments();
    const savedFoodLisenceDocument = await FoodLisenceModel.find({
      employee: req.user._id,
    }).countDocuments();

    return res.status(201).json({
      status: true,
      message: "successfully fetched count",
      response: {
        savedBusiessLoanDocument,
        savedCarLoanDocument,
        savedCreditCardDocument,
        savedFoodLisenceDocument,
        savedGSTLoanDocument,
        savedGoldLoanDocument,
        savedHomeLoanDocument,
        savedMortgageLoanDocument,
        savedNewCorrectionPanDocument,
        savedPassportLoanDocument,
        savedPersonalLoanDocument,
        savedShopActDocument,
        savedUdyamCertificateDocument,
      },
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const dashboardForTotolNumberofDocumentForAdmin = async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res
        .status(401)
        .json({ status: false, message: "user is not admin" });
    }
    const savedHomeLoanDocument = await HomeLoanModel.find({}).countDocuments();
    const savedBusiessLoanDocument = await BusinessLoanModel.find(
      {}
    ).countDocuments();
    const savedPersonalLoanDocument = await PersonalLoanModel.find(
      {}
    ).countDocuments();
    const savedMortgageLoanDocument = await MortgageLoanModel.find(
      {}
    ).countDocuments();
    const savedGoldLoanDocument = await GoldLoanModel.find({}).countDocuments();
    const savedCreditCardDocument = await CreditCardModel.find(
      {}
    ).countDocuments();
    const savedCarLoanDocument = await CarLoanModel.find({}).countDocuments();
    const savedGSTLoanDocument = await GSTLoanModel.find({}).countDocuments();
    const savedPassportLoanDocument = await PassportModel.find(
      {}
    ).countDocuments();
    const savedNewCorrectionPanDocument =
      await NewCorrectionPanApplicationModel.find({}).countDocuments();
    const savedShopActDocument = await ShopActModel.find({}).countDocuments();
    const savedUdyamCertificateDocument = await UdyamCertificateModel.find(
      {}
    ).countDocuments();
    const savedFoodLisenceDocument = await FoodLisenceModel.find(
      {}
    ).countDocuments();

    return res.status(201).json({
      status: true,
      message: "successfully fetched count",
      response: {
        savedBusiessLoanDocument,
        savedCarLoanDocument,
        savedCreditCardDocument,
        savedFoodLisenceDocument,
        savedGSTLoanDocument,
        savedGoldLoanDocument,
        savedHomeLoanDocument,
        savedMortgageLoanDocument,
        savedNewCorrectionPanDocument,
        savedPassportLoanDocument,
        savedPersonalLoanDocument,
        savedShopActDocument,
        savedUdyamCertificateDocument,
      },
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};
