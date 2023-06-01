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

export const dashboardForTotolNumberofSuccessDocumentForAdmin = async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res
        .status(401)
        .json({ status: false, message: "user is not admin" });
    }
    const savedHomeLoanDocument = await HomeLoanModel.find({isSuccess: true}).countDocuments();
    const savedBusiessLoanDocument = await BusinessLoanModel.find(
      {isSuccess: true}
    ).countDocuments();
    const savedPersonalLoanDocument = await PersonalLoanModel.find(
      {isSuccess: true}
    ).countDocuments();
    const savedMortgageLoanDocument = await MortgageLoanModel.find(
      {isSuccess: true}
    ).countDocuments();
    const savedGoldLoanDocument = await GoldLoanModel.find({isSuccess: true}).countDocuments();
    const savedCreditCardDocument = await CreditCardModel.find(
      {isSuccess: true}
    ).countDocuments();
    const savedCarLoanDocument = await CarLoanModel.find({isSuccess: true}).countDocuments();
    const savedGSTLoanDocument = await GSTLoanModel.find({isSuccess: true}).countDocuments();
    const savedPassportLoanDocument = await PassportModel.find(
      {isSuccess: true}
    ).countDocuments();
    const savedNewCorrectionPanDocument =
      await NewCorrectionPanApplicationModel.find({isSuccess: true}).countDocuments();
    const savedShopActDocument = await ShopActModel.find({isSuccess: true}).countDocuments();
    const savedUdyamCertificateDocument = await UdyamCertificateModel.find(
      {isSuccess: true}
    ).countDocuments();
    const savedFoodLisenceDocument = await FoodLisenceModel.find(
      {isSuccess: true}
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

export const dashboardForTotolNumberofFailedDocumentForAdmin = async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res
        .status(401)
        .json({ status: false, message: "user is not admin" });
    }
    const savedHomeLoanDocument = await HomeLoanModel.find({isFailed: true}).countDocuments();
    const savedBusiessLoanDocument = await BusinessLoanModel.find(
      {isFailed: true}
    ).countDocuments();
    const savedPersonalLoanDocument = await PersonalLoanModel.find(
      {isFailed: true}
    ).countDocuments();
    const savedMortgageLoanDocument = await MortgageLoanModel.find(
      {isFailed: true}
    ).countDocuments();
    const savedGoldLoanDocument = await GoldLoanModel.find({isFailed: true}).countDocuments();
    const savedCreditCardDocument = await CreditCardModel.find(
      {isFailed: true}
    ).countDocuments();
    const savedCarLoanDocument = await CarLoanModel.find({isFailed: true}).countDocuments();
    const savedGSTLoanDocument = await GSTLoanModel.find({isFailed: true}).countDocuments();
    const savedPassportLoanDocument = await PassportModel.find(
      {isFailed: true}
    ).countDocuments();
    const savedNewCorrectionPanDocument =
      await NewCorrectionPanApplicationModel.find({isFailed: true}).countDocuments();
    const savedShopActDocument = await ShopActModel.find({isFailed: true}).countDocuments();
    const savedUdyamCertificateDocument = await UdyamCertificateModel.find(
      {isFailed: true}
    ).countDocuments();
    const savedFoodLisenceDocument = await FoodLisenceModel.find(
      {isFailed: true}
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

export const dashboardForTotolNumberofPendingDocumentForAdmin = async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res
        .status(401)
        .json({ status: false, message: "user is not admin" });
    }
    const savedHomeLoanDocument = await HomeLoanModel.find({isPending: true}).countDocuments();
    const savedBusiessLoanDocument = await BusinessLoanModel.find(
      {isPending: true}
    ).countDocuments();
    const savedPersonalLoanDocument = await PersonalLoanModel.find(
      {isPending: true}
    ).countDocuments();
    const savedMortgageLoanDocument = await MortgageLoanModel.find(
      {isPending: true}
    ).countDocuments();
    const savedGoldLoanDocument = await GoldLoanModel.find({isPending: true}).countDocuments();
    const savedCreditCardDocument = await CreditCardModel.find(
      {isPending: true}
    ).countDocuments();
    const savedCarLoanDocument = await CarLoanModel.find({isPending: true}).countDocuments();
    const savedGSTLoanDocument = await GSTLoanModel.find({isPending: true}).countDocuments();
    const savedPassportLoanDocument = await PassportModel.find(
      {isPending: true}
    ).countDocuments();
    const savedNewCorrectionPanDocument =
      await NewCorrectionPanApplicationModel.find({isPending: true}).countDocuments();
    const savedShopActDocument = await ShopActModel.find({isPending: true}).countDocuments();
    const savedUdyamCertificateDocument = await UdyamCertificateModel.find(
      {isPending: true}
    ).countDocuments();
    const savedFoodLisenceDocument = await FoodLisenceModel.find(
      {isPending: true}
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


export const dashboardForTotolNumberSuccessofDocument = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ status: false, message: "Invalid Auth" });
    }
    const savedHomeLoanDocument = await HomeLoanModel.find({
      employee: req.user._id,
      isSuccess: true
    }).countDocuments();
    const savedBusiessLoanDocument = await BusinessLoanModel.find({
      employee: req.user._id,
      isSuccess: true
    }).countDocuments();
    const savedPersonalLoanDocument = await PersonalLoanModel.find({
      employee: req.user._id,
      isSuccess: true
    }).countDocuments();
    const savedMortgageLoanDocument = await MortgageLoanModel.find({
      employee: req.user._id,
      isSuccess: true
    }).countDocuments();
    const savedGoldLoanDocument = await GoldLoanModel.find({
      employee: req.user._id,
      isSuccess: true
    }).countDocuments();
    const savedCreditCardDocument = await CreditCardModel.find({
      employee: req.user._id,
      isSuccess: true
    }).countDocuments();
    const savedCarLoanDocument = await CarLoanModel.find({
      employee: req.user._id,
      isSuccess: true
    }).countDocuments();
    const savedGSTLoanDocument = await GSTLoanModel.find({
      employee: req.user._id,
      isSuccess: true
    }).countDocuments();
    const savedPassportLoanDocument = await PassportModel.find({
      employee: req.user._id,
      isSuccess: true
    }).countDocuments();
    const savedNewCorrectionPanDocument =
      await NewCorrectionPanApplicationModel.find({
        employee: req.user._id,
        isSuccess: true
      }).countDocuments();
    const savedShopActDocument = await ShopActModel.find({
      employee: req.user._id,
      isSuccess: true
    }).countDocuments();
    const savedUdyamCertificateDocument = await UdyamCertificateModel.find({
      employee: req.user._id,
      isSuccess: true
    }).countDocuments();
    const savedFoodLisenceDocument = await FoodLisenceModel.find({
      employee: req.user._id,
      isSuccess: true
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

export const dashboardForTotolNumberFailedofDocument = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ status: false, message: "Invalid Auth" });
    }
    const savedHomeLoanDocument = await HomeLoanModel.find({
      employee: req.user._id,
      isFailed: true
    }).countDocuments();
    const savedBusiessLoanDocument = await BusinessLoanModel.find({
      employee: req.user._id,
      isFailed: true
    }).countDocuments();
    const savedPersonalLoanDocument = await PersonalLoanModel.find({
      employee: req.user._id,
      isFailed: true
    }).countDocuments();
    const savedMortgageLoanDocument = await MortgageLoanModel.find({
      employee: req.user._id,
      isFailed: true
    }).countDocuments();
    const savedGoldLoanDocument = await GoldLoanModel.find({
      employee: req.user._id,
      isFailed: true
    }).countDocuments();
    const savedCreditCardDocument = await CreditCardModel.find({
      employee: req.user._id,
      isFailed: true
    }).countDocuments();
    const savedCarLoanDocument = await CarLoanModel.find({
      employee: req.user._id,
      isFailed: true
    }).countDocuments();
    const savedGSTLoanDocument = await GSTLoanModel.find({
      employee: req.user._id,
      isFailed: true
    }).countDocuments();
    const savedPassportLoanDocument = await PassportModel.find({
      employee: req.user._id,
      isFailed: true
    }).countDocuments();
    const savedNewCorrectionPanDocument =
      await NewCorrectionPanApplicationModel.find({
        employee: req.user._id,
        isFailed: true
      }).countDocuments();
    const savedShopActDocument = await ShopActModel.find({
      employee: req.user._id,
      isFailed: true
    }).countDocuments();
    const savedUdyamCertificateDocument = await UdyamCertificateModel.find({
      employee: req.user._id,
      isFailed: true
    }).countDocuments();
    const savedFoodLisenceDocument = await FoodLisenceModel.find({
      employee: req.user._id,
      isFailed: true
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

export const dashboardForTotolNumberPendingofDocument = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ status: false, message: "Invalid Auth" });
    }
    const savedHomeLoanDocument = await HomeLoanModel.find({
      employee: req.user._id,
      isPending: true
    }).countDocuments();
    const savedBusiessLoanDocument = await BusinessLoanModel.find({
      employee: req.user._id,
      isPending: true
    }).countDocuments();
    const savedPersonalLoanDocument = await PersonalLoanModel.find({
      employee: req.user._id,
      isPending: true
    }).countDocuments();
    const savedMortgageLoanDocument = await MortgageLoanModel.find({
      employee: req.user._id,
      isPending: true
    }).countDocuments();
    const savedGoldLoanDocument = await GoldLoanModel.find({
      employee: req.user._id,
      isPending: true
    }).countDocuments();
    const savedCreditCardDocument = await CreditCardModel.find({
      employee: req.user._id,
      isPending: true
    }).countDocuments();
    const savedCarLoanDocument = await CarLoanModel.find({
      employee: req.user._id,
      isPending: true
    }).countDocuments();
    const savedGSTLoanDocument = await GSTLoanModel.find({
      employee: req.user._id,
      isPending: true
    }).countDocuments();
    const savedPassportLoanDocument = await PassportModel.find({
      employee: req.user._id,
      isPending: true
    }).countDocuments();
    const savedNewCorrectionPanDocument =
      await NewCorrectionPanApplicationModel.find({
        employee: req.user._id,
        isPending: true
      }).countDocuments();
    const savedShopActDocument = await ShopActModel.find({
      employee: req.user._id,
      isPending: true
    }).countDocuments();
    const savedUdyamCertificateDocument = await UdyamCertificateModel.find({
      employee: req.user._id,
      isPending: true
    }).countDocuments();
    const savedFoodLisenceDocument = await FoodLisenceModel.find({
      employee: req.user._id,
      isPending: true
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
