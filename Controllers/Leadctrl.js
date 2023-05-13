import HomeLoanModel from "../Models/HomeloanModel.js";
import BusinessloanModel from "../Models/BusinessloanModel.js";
import PersonalLoanModel from "../Models/PersonalLoanModel.js";
import MortgageLoanModel from "../Models/MortgageLoanModel.js";
import GoldLoanModel from "../Models/GoldLoanModel.js";
import CreditCardModel from "../Models/CreditCardModel.js";
import CarLoanModel from "../Models/CarLoanModel.js";
import NewCorrectionPanApplicationModel from "../Models/NewCorrectionPanApplication.js";
import PassportModel from "../Models/PassportModel.js";
import GSTResgistraionModel from "../Models/GSTRegistrationModel.js";
import ShopActModel from "../Models/ServiceModel.js";
import UdyamCertificateModel from "../Models/UdyamCertificationModel.js";
import FoodLisenceModel from "../Models/FoodLisenceModel.js";

export const CreateLeadctrlForHomeLoan = async (req, resp) => {
  try {
    const { serviceId, clientId, employeeId, loanAmount } = req.body;

    if (!serviceId || !clientId || !employeeId || !loanAmount) {
      return resp.status(422).json({
        status: false,
        message: "Please provide service, client and employeeID properly",
      });
    }

    const documentObject = req.files;

    const homeLoanData = {
      service: serviceId,
      client: clientId,
      employee: employeeId,
      LoanAmount: loanAmount,
    };

    for (const key in documentObject) {
      homeLoanData[key] = documentObject[key][0].path;
    }

    const newHomeLoanData = new HomeLoanModel(homeLoanData);

    const savedResponse = await newHomeLoanData.save();

    if (savedResponse) {
      return resp.status(201).json({
        status: true,
        message: "successfully created lead for home loan model",
        savedData: savedResponse,
      });
    }
  } catch (error) {
    console.log(error);
    return resp
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const createLeadForBusinessLoanModel = async (req, resp) => {
  try {
    const { serviceId, clientId, employeeId, loanAmount } = req.body;

    if (!serviceId || !clientId || !employeeId || !loanAmount) {
      return resp.status(422).json({
        status: false,
        message: "Please provide service, client and employeeID properly",
      });
    }

    const documentObject = req.files;

    const businessLoanData = {
      service: serviceId,
      client: clientId,
      employee: employeeId,
      LoanAmount: loanAmount,
    };

    for (const key in documentObject) {
      businessLoanData[key] = documentObject[key][0].path;
    }

    const newBusinessLoanData = new BusinessloanModel(businessLoanData);

    const savedResponse = await newBusinessLoanData.save();

    if (savedResponse) {
      return resp.status(201).json({
        status: true,
        message: "successfully created lead for Business loan model",
        savedData: savedResponse,
      });
    }
  } catch (error) {
    console.log(error);
    return resp
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const createLeadForPersonalLoan = async (req, resp) => {
  try {
    const { serviceId, clientId, loanAmount } = req.body;

    if (!serviceId || !clientId || !loanAmount) {
      return resp.status(422).json({
        status: false,
        message: "Please provide service, client and employeeID properly",
      });
    }

    const documentObject = req.files;

    const PersonalLoanData = {
      service: serviceId,
      client: clientId,
      employee: req.user._id,
      LoanAmount: loanAmount,
    };

    for (const key in documentObject) {
      PersonalLoanData[key] = documentObject[key][0];
    }

    const newPersonalLoanData = new PersonalLoanModel(PersonalLoanData);

    const savedResponse = await newPersonalLoanData.save();

    if (savedResponse) {
      return resp.status(201).json({
        status: true,
        message: "successfully created lead for Personal loan model",
        savedData: savedResponse,
      });
    }
  } catch (error) {
    console.log(error);
    return resp
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const createLeadForMortgageLoan = async (req, resp) => {
  try {
    const { serviceId, clientId, employeeId, loanAmount } = req.body;

    if (!serviceId || !clientId || !employeeId || !loanAmount) {
      return resp.status(422).json({
        status: false,
        message: "Please provide service, client and employeeID properly",
      });
    }

    const documentObject = req.files;

    const MortgageLoanData = {
      service: serviceId,
      client: clientId,
      employee: employeeId,
      LoanAmount: loanAmount,
    };

    for (const key in documentObject) {
      MortgageLoanData[key] = documentObject[key][0].path;
    }

    const newMortgageLoanData = new MortgageLoanModel(MortgageLoanData);

    const savedResponse = await newMortgageLoanData.save();

    if (savedResponse) {
      return resp.status(201).json({
        status: true,
        message: "successfully created lead for Mortgage loan model",
        savedData: savedResponse,
      });
    }
  } catch (error) {
    console.log(error);
    return resp
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const createLeadForGoldLoan = async (req, resp) => {
  try {
    const { serviceId, clientId, employeeId, loanAmount } = req.body;

    if (!serviceId || !clientId || !employeeId || !loanAmount) {
      return resp.status(422).json({
        status: false,
        message: "Please provide service, client and employeeID properly",
      });
    }

    const documentObject = req.files;

    const GoldLoanData = {
      service: serviceId,
      client: clientId,
      employee: employeeId,
      LoanAmount: loanAmount,
    };

    for (const key in documentObject) {
      GoldLoanData[key] = documentObject[key][0].path;
    }

    const newGoldLoanData = new GoldLoanModel(GoldLoanData);

    const savedResponse = await newGoldLoanData.save();

    if (savedResponse) {
      return resp.status(201).json({
        status: true,
        message: "successfully created lead for Gold loan model",
        savedData: savedResponse,
      });
    }
  } catch (error) {
    console.log(error);
    return resp
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const createLeadForCreditCard = async (req, resp) => {
  try {
    const { serviceId, clientId, employeeId, loanAmount } = req.body;

    if (!serviceId || !clientId || !employeeId || !loanAmount) {
      return resp.status(422).json({
        status: false,
        message: "Please provide service, client and employeeID properly",
      });
    }

    const documentObject = req.files;

    const CreditCardData = {
      service: serviceId,
      client: clientId,
      employee: employeeId,
      LoanAmount: loanAmount,
    };

    for (const key in documentObject) {
      CreditCardData[key] = documentObject[key][0].path;
    }

    const newCreditCardData = new CreditCardModel(CreditCardData);

    const savedResponse = await newCreditCardData.save();

    if (savedResponse) {
      return resp.status(201).json({
        status: true,
        message: "successfully created lead for Gold loan model",
        savedData: savedResponse,
      });
    }
  } catch (error) {
    console.log(error);
    return resp
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const createLeadForCarLoan = async (req, resp) => {
  try {
    const { serviceId, clientId, employeeId, loanAmount } = req.body;

    if (!serviceId || !clientId || !employeeId || !loanAmount) {
      return resp.status(422).json({
        status: false,
        message: "Please provide service, client and employeeID properly",
      });
    }

    const documentObject = req.files;

    const CarLoanData = {
      service: serviceId,
      client: clientId,
      employee: employeeId,
      LoanAmount: loanAmount,
    };

    for (const key in documentObject) {
      CarLoanData[key] = documentObject[key][0].path;
    }

    const newCarLoanData = new CarLoanModel(CarLoanData);

    const savedResponse = await newCarLoanData.save();

    if (savedResponse) {
      return resp.status(201).json({
        status: true,
        message: "successfully created lead for Gold loan model",
        savedData: savedResponse,
      });
    }
  } catch (error) {
    console.log(error);
    return resp
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const createLeadForNewCorrectionPanApplication = async (req, resp) => {
  try {
    const { serviceId, clientId, employeeId, loanAmount } = req.body;

    if (!serviceId || !clientId || !employeeId || !loanAmount) {
      return resp.status(422).json({
        status: false,
        message: "Please provide service, client and employeeID properly",
      });
    }

    const documentObject = req.files;

    const NewCorrectionPanApplicationData = {
      service: serviceId,
      client: clientId,
      employee: employeeId,
      LoanAmount: loanAmount,
    };

    for (const key in documentObject) {
      NewCorrectionPanApplicationData[key] = documentObject[key][0].path;
    }

    const newNewCorrectionPanApplicationData =
      new NewCorrectionPanApplicationModel(NewCorrectionPanApplicationData);

    const savedResponse = await newNewCorrectionPanApplicationData.save();

    if (savedResponse) {
      return resp.status(201).json({
        status: true,
        message: "successfully created lead for Gold loan model",
        savedData: savedResponse,
      });
    }
  } catch (error) {
    console.log(error);
    return resp
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const createLeadForPassport = async (req, resp) => {
  try {
    const { serviceId, clientId, employeeId, loanAmount } = req.body;

    if (!serviceId || !clientId || !employeeId || !loanAmount) {
      return resp.status(422).json({
        status: false,
        message: "Please provide service, client and employeeID properly",
      });
    }

    const documentObject = req.files;

    const PassportData = {
      service: serviceId,
      client: clientId,
      employee: employeeId,
      LoanAmount: loanAmount,
    };

    for (const key in documentObject) {
      PassportData[key] = documentObject[key][0].path;
    }

    const newPassportData = new PassportModel(PassportData);

    const savedResponse = await newPassportData.save();

    if (savedResponse) {
      return resp.status(201).json({
        status: true,
        message: "successfully created lead for Gold loan model",
        savedData: savedResponse,
      });
    }
  } catch (error) {
    console.log(error);
    return resp
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const createLeadForGSTRegistration = async (req, resp) => {
  try {
    const { serviceId, clientId, employeeId, loanAmount } = req.body;

    if (!serviceId || !clientId || !employeeId || !loanAmount) {
      return resp.status(422).json({
        status: false,
        message: "Please provide service, client and employeeID properly",
      });
    }

    const documentObject = req.files;

    const GSTRegistrationData = {
      service: serviceId,
      client: clientId,
      employee: employeeId,
      LoanAmount: loanAmount,
    };

    for (const key in documentObject) {
      GSTRegistrationData[key] = documentObject[key][0].path;
    }

    const newGSTRegistrationData = new GSTResgistraionModel(
      GSTRegistrationData
    );

    const savedResponse = await newGSTRegistrationData.save();

    if (savedResponse) {
      return resp.status(201).json({
        status: true,
        message: "successfully created lead for Gold loan model",
        savedData: savedResponse,
      });
    }
  } catch (error) {
    console.log(error);
    return resp
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const createLeadForShopAct = async (req, resp) => {
  try {
    const {
      serviceId,
      clientId,
      employeeId,
      loanAmount,
      detailsOfBusiness,
      natureOfBusiness,
    } = req.body;

    if (!serviceId || !clientId || !employeeId || !loanAmount) {
      return resp.status(422).json({
        status: false,
        message: "Please provide service, client and employeeID properly",
      });
    }

    const documentObject = req.files;

    const ShopActData = {
      service: serviceId,
      client: clientId,
      employee: employeeId,
      LoanAmount: loanAmount,
      DetailsOfBusiness: detailsOfBusiness,
      NatureOfBusiness: natureOfBusiness,
    };

    for (const key in documentObject) {
      ShopActData[key] = documentObject[key][0].path;
    }

    const newShopActData = new ShopActModel(ShopActData);

    const savedResponse = await newShopActData.save();

    if (savedResponse) {
      return resp.status(201).json({
        status: true,
        message: "successfully created lead for Gold loan model",
        savedData: savedResponse,
      });
    }
  } catch (error) {
    console.log(error);
    return resp
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const createLeadForUdyamCertificate = async (req, resp) => {
  try {
    const { serviceId, clientId, employeeId, loanAmount, businessAdress } =
      req.body;

    if (!serviceId || !clientId || !employeeId || !loanAmount) {
      return resp.status(422).json({
        status: false,
        message: "Please provide service, client and employeeID properly",
      });
    }

    const documentObject = req.files;

    const UdyamCertificateData = {
      service: serviceId,
      client: clientId,
      employee: employeeId,
      LoanAmount: loanAmount,
      BusinessAdress: businessAdress,
    };

    for (const key in documentObject) {
      UdyamCertificateData[key] = documentObject[key][0].path;
    }

    const newUdyamCertificateData = new UdyamCertificateModel(
      UdyamCertificateData
    );

    const savedResponse = await newUdyamCertificateData.save();

    if (savedResponse) {
      return resp.status(201).json({
        status: true,
        message: "successfully created lead for Gold loan model",
        savedData: savedResponse,
      });
    }
  } catch (error) {
    console.log(error);
    return resp
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const createLeadForFoodLisence = async (req, resp) => {
  try {
    const { serviceId, clientId, employeeId, loanAmount } = req.body;

    if (!serviceId || !clientId || !employeeId || !loanAmount) {
      return resp.status(422).json({
        status: false,
        message: "Please provide service, client and employeeID properly",
      });
    }

    const documentObject = req.files;

    const FoodLisenceData = {
      service: serviceId,
      client: clientId,
      employee: employeeId,
      LoanAmount: loanAmount,
    };

    for (const key in documentObject) {
      FoodLisenceData[key] = documentObject[key][0].path;
    }

    const newFoodLisenceData = new FoodLisenceModel(FoodLisenceData);

    const savedResponse = await newFoodLisenceData.save();

    if (savedResponse) {
      return resp.status(201).json({
        status: true,
        message: "successfully created lead for Gold loan model",
        savedData: savedResponse,
      });
    }
  } catch (error) {
    console.log(error);
    return resp
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const getHomeLoanForEmployee = async (req, resp) => {
  try {
    const savedMyLead = await HomeLoanModel.find({
      employee: req.user._id,
    }).populate(["empolyeeid", "serviceid", "Client"]);

    if (savedMyLead < 1) {
      return resp
        .status(204)
        .json({ status: false, message: "no data is available to display" });
    }

    return resp.status(202).json({
      status: true,
      message: "successfully fetched lead for you",
      savedLeads: savedMyLead,
    });
  } catch (error) {
    console.log(error);
    return resp
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const getBusinessLoanForEmployee = async (req, resp) => {
  try {
    const savedMyLead = await BusinessloanModel.find({
      employee: req.user._id,
    }).populate(["empolyeeid", "serviceid", "Client"]);

    if (savedMyLead < 1) {
      return resp
        .status(204)
        .json({ status: false, message: "no data is available to display" });
    }

    return resp.status(202).json({
      status: true,
      message: "successfully fetched lead for you",
      savedLeads: savedMyLead,
    });
  } catch (error) {
    console.log(error);
    return resp
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const getPersonalLoanForEmployee = async (req, resp) => {
  try {
    const savedMyLead = await PersonalLoanModel.find({
      employee: req.user._id,
    }).populate(["service ", "client", "employee"]);

    if (savedMyLead < 1) {
      return resp
        .status(204)
        .json({ status: false, message: "no data is available to display" });
    }

    return resp.status(202).json({
      status: true,
      message: "successfully fetched lead for you",
      savedLeads: savedMyLead,
    });
  } catch (error) {
    console.log(error);
    return resp
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const getMortgageLoanForEmployee = async (req, resp) => {
  try {
    const savedMyLead = await MortgageLoanModel.find({
      employee: req.user._id,
    }).populate(["empolyeeid", "serviceid", "Client"]);

    if (savedMyLead < 1) {
      return resp
        .status(204)
        .json({ status: false, message: "no data is available to display" });
    }

    return resp.status(202).json({
      status: true,
      message: "successfully fetched lead for you",
      savedLeads: savedMyLead,
    });
  } catch (error) {
    console.log(error);
    return resp
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const getGoldLoanForEmployee = async (req, resp) => {
  try {
    const savedMyLead = await GoldLoanModel.find({
      employee: req.user._id,
    }).populate(["empolyeeid", "serviceid", "Client"]);

    if (savedMyLead < 1) {
      return resp
        .status(204)
        .json({ status: false, message: "no data is available to display" });
    }

    return resp.status(202).json({
      status: true,
      message: "successfully fetched lead for you",
      savedLeads: savedMyLead,
    });
  } catch (error) {
    console.log(error);
    return resp
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const getCreditCardLoanForEmployee = async (req, resp) => {
  try {
    const savedMyLead = await CreditCardModel.find({
      employee: req.user._id,
    }).populate(["empolyeeid", "serviceid", "Client"]);

    if (savedMyLead < 1) {
      return resp
        .status(204)
        .json({ status: false, message: "no data is available to display" });
    }

    return resp.status(202).json({
      status: true,
      message: "successfully fetched lead for you",
      savedLeads: savedMyLead,
    });
  } catch (error) {
    console.log(error);
    return resp
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const getCarLoanForEmployee = async (req, resp) => {
  try {
    const savedMyLead = await CarLoanModel.find({
      employee: req.user._id,
    }).populate(["empolyeeid", "serviceid", "Client"]);

    if (savedMyLead < 1) {
      return resp
        .status(204)
        .json({ status: false, message: "no data is available to display" });
    }

    return resp.status(202).json({
      status: true,
      message: "successfully fetched lead for you",
      savedLeads: savedMyLead,
    });
  } catch (error) {
    console.log(error);
    return resp
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const getNewCorrectionPanApplicationForEmployee = async (req, resp) => {
  try {
    const savedMyLead = await NewCorrectionPanApplicationModel.find({
      employee: req.user._id,
    }).populate(["empolyeeid", "serviceid", "Client"]);

    if (savedMyLead < 1) {
      return resp
        .status(204)
        .json({ status: false, message: "no data is available to display" });
    }

    return resp.status(202).json({
      status: true,
      message: "successfully fetched lead for you",
      savedLeads: savedMyLead,
    });
  } catch (error) {
    console.log(error);
    return resp
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const getPassportForEmplyoee = async (req, resp) => {
  try {
    const savedMyLead = await PassportModel.find({
      employee: req.user._id,
    }).populate(["empolyeeid", "serviceid", "Client"]);

    if (savedMyLead < 1) {
      return resp
        .status(204)
        .json({ status: false, message: "no data is available to display" });
    }

    return resp.status(202).json({
      status: true,
      message: "successfully fetched lead for you",
      savedLeads: savedMyLead,
    });
  } catch (error) {
    console.log(error);
    return resp
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const getGSTRegistrationForEmployee = async (req, resp) => {
  try {
    const savedMyLead = await GSTResgistraionModel.find({
      employee: req.user._id,
    }).populate(["empolyeeid", "serviceid", "Client"]);

    if (savedMyLead < 1) {
      return resp
        .status(204)
        .json({ status: false, message: "no data is available to display" });
    }

    return resp.status(202).json({
      status: true,
      message: "successfully fetched lead for you",
      savedLeads: savedMyLead,
    });
  } catch (error) {
    console.log(error);
    return resp
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const getShopActForEmployee = async (req, resp) => {
  try {
    const savedMyLead = await ShopActModel.find({
      employee: req.user._id,
    }).populate(["empolyeeid", "serviceid", "Client"]);

    if (savedMyLead < 1) {
      return resp
        .status(204)
        .json({ status: false, message: "no data is available to display" });
    }

    return resp.status(202).json({
      status: true,
      message: "successfully fetched lead for you",
      savedLeads: savedMyLead,
    });
  } catch (error) {
    console.log(error);
    return resp
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const getUdyamCertificateForEmployee = async (req, resp) => {
  try {
    const savedMyLead = await UdyamCertificateModel.find({
      employee: req.user._id,
    }).populate(["empolyeeid", "serviceid", "Client"]);

    if (savedMyLead < 1) {
      return resp
        .status(204)
        .json({ status: false, message: "no data is available to display" });
    }

    return resp.status(202).json({
      status: true,
      message: "successfully fetched lead for you",
      savedLeads: savedMyLead,
    });
  } catch (error) {
    console.log(error);
    return resp
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const getFoodLisenceForEmployee = async (req, resp) => {
  try {
    const savedMyLead = await FoodLisenceModel.find({
      employee: req.user._id,
    }).populate(["empolyeeid", "serviceid", "Client"]);

    if (savedMyLead < 1) {
      return resp
        .status(204)
        .json({ status: false, message: "no data is available to display" });
    }

    return resp.status(202).json({
      status: true,
      message: "successfully fetched lead for you",
      savedLeads: savedMyLead,
    });
  } catch (error) {
    console.log(error);
    return resp
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const editHomeLoanServiceController = async (req, res) => {
  try {
    let { leadId, fieldToEdit } = req.body;

    if (!leadId || !fieldToEdit) {
      return res
        .status(422)
        .json({ status: false, message: "please provide field to edit" });
    }

    let valueToEdit = req.files[fieldToEdit][0];

    const updatedResponse = await HomeLoanModel.updateOne(
      { _id: leadId },
      { $set: { [fieldToEdit]: valueToEdit } }
    );

    if (updatedResponse.acknowledged) {
      return res
        .status(201)
        .json({ status: true, message: "This field is successfully updated" });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const editBusinessLoanServiceController = async (req, res) => {
  try {
    let { leadId, fieldToEdit } = req.body;

    if (!leadId || !fieldToEdit) {
      return res
        .status(422)
        .json({ status: false, message: "please provide field to edit" });
    }

    let valueToEdit = req.files[fieldToEdit][0];

    const updatedResponse = await BusinessloanModel.updateOne(
      { _id: leadId },
      { $set: { [fieldToEdit]: valueToEdit } }
    );

    if (updatedResponse.acknowledged) {
      return res
        .status(201)
        .json({ status: true, message: "This field is successfully updated" });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const editPersonalLoanServiceController = async (req, res) => {
  try {
    let { leadId, fieldToEdit } = req.body;

    if (!leadId || !fieldToEdit) {
      return res
        .status(422)
        .json({ status: false, message: "please provide field to edit" });
    }

    let valueToEdit = req.files[fieldToEdit][0];

    const updatedResponse = await PersonalLoanModel.updateOne(
      { _id: leadId },
      { $set: { [fieldToEdit]: valueToEdit } }
    );

    if (updatedResponse.acknowledged) {
      return res
        .status(201)
        .json({ status: true, message: "This field is successfully updated" });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const editMortgageLoanServiceController = async (req, res) => {
  try {
    let { leadId, fieldToEdit } = req.body;

    if (!leadId || !fieldToEdit) {
      return res
        .status(422)
        .json({ status: false, message: "please provide field to edit" });
    }

    let valueToEdit = req.files[fieldToEdit][0];

    const updatedResponse = await MortgageLoanModel.updateOne(
      { _id: leadId },
      { $set: { [fieldToEdit]: valueToEdit } }
    );

    if (updatedResponse.acknowledged) {
      return res
        .status(201)
        .json({ status: true, message: "This field is successfully updated" });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const editGoldLoanServiceController = async (req, res) => {
  try {
    let { leadId, fieldToEdit } = req.body;

    if (!leadId || !fieldToEdit) {
      return res
        .status(422)
        .json({ status: false, message: "please provide field to edit" });
    }

    let valueToEdit = req.files[fieldToEdit][0];

    const updatedResponse = await GoldLoanModel.updateOne(
      { _id: leadId },
      { $set: { [fieldToEdit]: valueToEdit } }
    );

    if (updatedResponse.acknowledged) {
      return res
        .status(201)
        .json({ status: true, message: "This field is successfully updated" });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const editCreditCardServiceController = async (req, res) => {
  try {
    let { leadId, fieldToEdit } = req.body;

    if (!leadId || !fieldToEdit) {
      return res
        .status(422)
        .json({ status: false, message: "please provide field to edit" });
    }

    let valueToEdit = req.files[fieldToEdit][0];

    const updatedResponse = await CreditCardModel.updateOne(
      { _id: leadId },
      { $set: { [fieldToEdit]: valueToEdit } }
    );

    if (updatedResponse.acknowledged) {
      return res
        .status(201)
        .json({ status: true, message: "This field is successfully updated" });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const editCarLoanServiceController = async (req, res) => {
  try {
    let { leadId, fieldToEdit } = req.body;

    if (!leadId || !fieldToEdit) {
      return res
        .status(422)
        .json({ status: false, message: "please provide field to edit" });
    }

    let valueToEdit = req.files[fieldToEdit][0];

    const updatedResponse = await CarLoanModel.updateOne(
      { _id: leadId },
      { $set: { [fieldToEdit]: valueToEdit } }
    );

    if (updatedResponse.acknowledged) {
      return res
        .status(201)
        .json({ status: true, message: "This field is successfully updated" });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const editNewCorrectionPanApplication = async (req, res) => {
  try {
    let { leadId, fieldToEdit } = req.body;

    if (!leadId || !fieldToEdit) {
      return res
        .status(422)
        .json({ status: false, message: "please provide field to edit" });
    }

    let valueToEdit = req.files[fieldToEdit][0];

    const updatedResponse = await NewCorrectionPanApplicationModel.updateOne(
      { _id: leadId },
      { $set: { [fieldToEdit]: valueToEdit } }
    );

    if (updatedResponse.acknowledged) {
      return res
        .status(201)
        .json({ status: true, message: "This field is successfully updated" });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const editPassportServiceController = async (req, res) => {
  try {
    let { leadId, fieldToEdit } = req.body;

    if (!leadId || !fieldToEdit) {
      return res
        .status(422)
        .json({ status: false, message: "please provide field to edit" });
    }

    let valueToEdit = req.files[fieldToEdit][0];

    const updatedResponse = await PassportModel.updateOne(
      { _id: leadId },
      { $set: { [fieldToEdit]: valueToEdit } }
    );

    if (updatedResponse.acknowledged) {
      return res
        .status(201)
        .json({ status: true, message: "This field is successfully updated" });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const editGSTRegistrationController = async (req, res) => {
  try {
    let { leadId, fieldToEdit } = req.body;

    if (!leadId || !fieldToEdit) {
      return res
        .status(422)
        .json({ status: false, message: "please provide field to edit" });
    }

    let valueToEdit = req.files[fieldToEdit][0];

    const updatedResponse = await GSTResgistraionModel.updateOne(
      { _id: leadId },
      { $set: { [fieldToEdit]: valueToEdit } }
    );

    if (updatedResponse.acknowledged) {
      return res
        .status(201)
        .json({ status: true, message: "This field is successfully updated" });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const editShopActController = async (req, res) => {
  try {
    let { leadId, fieldToEdit } = req.body;

    if (!leadId || !fieldToEdit) {
      return res
        .status(422)
        .json({ status: false, message: "please provide field to edit" });
    }

    let valueToEdit = req.files[fieldToEdit][0];

    const updatedResponse = await ShopActModel.updateOne(
      { _id: leadId },
      { $set: { [fieldToEdit]: valueToEdit } }
    );

    if (updatedResponse.acknowledged) {
      return res
        .status(201)
        .json({ status: true, message: "This field is successfully updated" });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const editUdyamCertificateController = async (req, res) => {
  try {
    let { leadId, fieldToEdit } = req.body;

    if (!leadId || !fieldToEdit) {
      return res
        .status(422)
        .json({ status: false, message: "please provide field to edit" });
    }

    let valueToEdit = req.files[fieldToEdit][0];

    const updatedResponse = await UdyamCertificateModel.updateOne(
      { _id: leadId },
      { $set: { [fieldToEdit]: valueToEdit } }
    );

    if (updatedResponse.acknowledged) {
      return res
        .status(201)
        .json({ status: true, message: "This field is successfully updated" });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const editFoodLisenceController = async (req, res) => {
  try {
    let { leadId, fieldToEdit } = req.body;

    if (!leadId || !fieldToEdit) {
      return res
        .status(422)
        .json({ status: false, message: "please provide field to edit" });
    }

    let valueToEdit = req.files[fieldToEdit][0];

    const updatedResponse = await FoodLisenceModel.updateOne(
      { _id: leadId },
      { $set: { [fieldToEdit]: valueToEdit } }
    );

    if (updatedResponse.acknowledged) {
      return res
        .status(201)
        .json({ status: true, message: "This field is successfully updated" });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const getHomeLoanLeadById = async (req, res) => {
  try {
    const { homeleadID } = req.query;

    if (!homeleadID) {
      return res
        .status(422)
        .json({ status: false, message: "no home lead id is giving" });
    }



    const savedHomeLoan = await HomeLoanModel.findById(homeleadID).populate([
      "service",
      "client",
      "employee",
    ]);

    if (!savedHomeLoan) {
      return res.status(422).json({
        status: false,
        message: "no such data in database with given id",
      });
    }

    return res.status(201).json({
      status: true,
      message: "successfully fetched single lead data",
      response: savedHomeLoan,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const getPersonalLoanById = async (req, res) => {
  try {
    const { personalLoanId } = req.query;

    if (!personalLoanId) {
      return res
        .status(422)
        .json({ status: false, message: "no home lead id is giving" });
    }

    const savedPersonalLoan = await PersonalLoanModel.findById(
      personalLoanId
    ).populate(["service", "client", "employee"]);

    if (!savedPersonalLoan) {
      return res.status(422).json({
        status: false,
        message: "no such data in database with given id",
      });
    }

    return res.status(201).json({
      status: true,
      message: "successfully fetched single lead data",
      response: savedPersonalLoan,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const getBusinessLoanById = async (req, res) => {
  try {
    const { businessLoanId } = req.query;

    if (!businessLoanId) {
      return res
        .status(422)
        .json({ status: false, message: "no home lead id is giving" });
    }

    const savedBusinessLoan = await BusinessloanModel.findById(
      businessLoanId
    ).populate(["service", "client", "employee"]);

    if (!savedBusinessLoan) {
      return res.status(422).json({
        status: false,
        message: "no such data in database with given id",
      });
    }

    return res.status(201).json({
      status: true,
      message: "successfully fetched single lead data",
      response: savedBusinessLoan,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const getMortgageLoanById = async (req, res) => {
  try {
    const { mortgageLoanId } = req.query;

    if (!mortgageLoanId) {
      return res
        .status(422)
        .json({ status: false, message: "no home lead id is giving" });
    }

    const savedMortgageLoan = await MortgageLoanModel.findById(
      mortgageLoanId
    ).populate(["service", "client", "employee"]);

    if (!savedMortgageLoan) {
      return res.status(422).json({
        status: false,
        message: "no such data in database with given id",
      });
    }

    return res.status(201).json({
      status: true,
      message: "successfully fetched single lead data",
      response: savedMortgageLoan,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const getGoldLoanById = async (req, res) => {
  try {
    const { goldLoanId } = req.query;

    if (!goldLoanId) {
      return res
        .status(422)
        .json({ status: false, message: "no home lead id is giving" });
    }

    const savedGoldLoan = await GoldLoanModel.findById(goldLoanId).populate([
      "service",
      "client",
      "employee",
    ]);

    if (!savedGoldLoan) {
      return res.status(422).json({
        status: false,
        message: "no such data in database with given id",
      });
    }

    return res.status(201).json({
      status: true,
      message: "successfully fetched single lead data",
      response: savedGoldLoan,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};

export const getCreditCardById = async (req, res) => {
  try {
    const { creditCardId } = req.query;

    if (!creditCardId) {
      return res
        .status(422)
        .json({ status: false, message: "no home lead id is giving" });
    }

    const savedCreditCard = await CreditCardModel.findById(
      creditCardId
    ).populate(["service", "client", "employee"]);

    if (!savedCreditCard) {
      return res.status(422).json({
        status: false,
        message: "no such data in database with given id",
      });
    }

    return res.status(201).json({
      status: true,
      message: "successfully fetched single lead data",
      response: savedCreditCard,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", err: error });
  }
};
