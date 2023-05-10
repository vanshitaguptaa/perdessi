import HomeLoanModel from "../Models/HomeloanModel.js";
import BusinessloanModel from "../Models/BusinessloanModel.js";
import PersonalLoanModel from "../Models/PersonalLoanModel.js";
import MortgageLoanModel from "../Models/MortgageLoanModel.js";
import GoldLoanModel from "../Models/GoldLoanModel.js";
import CreditCardModel from "../Models/CreditCardModel.js";

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
    const { serviceId, clientId, employeeId, loanAmount } = req.body;

    if (!serviceId || !clientId || !employeeId || !loanAmount) {
      return resp.status(422).json({
        status: false,
        message: "Please provide service, client and employeeID properly",
      });
    }

    const documentObject = req.files;

    const PersonalLoanData = {
      service: serviceId,
      client: clientId,
      employee: employeeId,
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