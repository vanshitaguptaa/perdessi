import Express from "express";
import {
  CreateLeadctrlForHomeLoan,
  createLeadForBusinessLoanModel,
  createLeadForPersonalLoan,
  createLeadForMortgageLoan,
  createLeadForGoldLoan,
  createLeadForCreditCard,
  getBusinessLoanForEmployee,
  getCreditCardLoanForEmployee,
  getGoldLoanForEmployee,
  getHomeLoanForEmployee,
  getMortgageLoanForEmployee,
  getPersonalLoanForEmployee,
  editBusinessLoanServiceController,
  editCreditCardServiceController,
  editGoldLoanServiceController,
  editHomeLoanServiceController,
  editMortgageLoanServiceController,
  editPersonalLoanServiceController,
} from "../Controllers/Leadctrl.js";
import { employeeTokenCheck } from "../Middleware/Tokencheck.js";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const app = Express();

const Route = Express.Router();

let fileName = fileURLToPath(import.meta.url);
let __dirname = dirname(fileName);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../public/uploads/lead"));
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.originalname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

function checkFileType(file, cb) {
  const filetypes = /jpg|jpeg|png|pdf/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb("Images and pdf only!"); // custom this message to fit your needs
  }
}

const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb);
  },
});

const multipleUploadForHomeLoan = upload.fields([
  { name: "employeeIdentityCard", maxCount: 1 },
  { name: "loanApplication", maxCount: 1 },
  { name: "proofOfIdentity", maxCount: 1 },
  { name: "proofOfResidency", maxCount: 1 },
  { name: "permissionOfConstruction", maxCount: 1 },
  { name: "registeredAgreementForSales", maxCount: 1 },
  { name: "allotmentletter", maxCount: 1 },
  { name: "stampedAgreement", maxCount: 1 },
  { name: "occupancyCertificate", maxCount: 1 },
  { name: "shareCertification", maxCount: 1 },
  { name: "maintainanceBill", maxCount: 1 },
  { name: "electricityBill", maxCount: 1 },
  { name: "propertyTaxReceipt", maxCount: 1 },
  {
    name: "approvedPlanCopyRegisteredDevelopmentAgreementofthebuilderConveyanceDeed",
    maxCount: 1,
  },
  { name: "paymentMadetoBuilderRecept", maxCount: 1 },
  { name: "sixMonthBankStatement", maxCount: 1 },
  { name: "loanAccountStatement", maxCount: 1 },
  { name: "threeMonthSalarySlip", maxCount: 1 },
  { name: "twoYearOfFormsixteenOrItReturn", maxCount: 1 },
  { name: "businessAddressProof", maxCount: 1 },
  { name: "ThreeYearItReturn", maxCount: 1 },
  { name: "businessLisenceDetail", maxCount: 1 },
  { name: "TDScertification", maxCount: 1 },
  { name: "certificationOfQualification", maxCount: 1 },
]);

const multipleUploadForBusinessLoan = upload.fields([
  { name: "PanCard", maxCount: 1 },
  { name: "IdentityProof", maxCount: 1 },
  { name: "AddressProof", maxCount: 1 },
  { name: "SixMonthBankStatement", maxCount: 1 },
  { name: "LatestITR", maxCount: 1 },
  { name: "ProofOfContinuationITR", maxCount: 1 },
  { name: "ProofOfContinuationTradeLiscense", maxCount: 1 },
  { name: "ProofOfContinuationEstablishment", maxCount: 1 },
  { name: "ProofOfContinuationSalesTax", maxCount: 1 },
  { name: "PropDeclaration", maxCount: 1 },
  { name: "PartnershipDeed", maxCount: 1 },
  { name: "TrueCopyMemorandum", maxCount: 1 },
  { name: "TrueCopyArticleofAssociation", maxCount: 1 },
  {
    name: "TrueCopyBoardResolution",
    maxCount: 1,
  },
]);

const multipleUploadForPersonalLoan = upload.fields([
  { name: "SalariedProofOfIdentity", maxCount: 1 },
  { name: "SalariedProofOfResidence", maxCount: 1 },
  { name: "SalariedThreeMonthsBankStatement", maxCount: 1 },
  { name: "SalariedThreeMonthSalarySlip", maxCount: 1 },
  { name: "SalariedTwoPassportPhoto", maxCount: 2 },
  { name: "SelfEmployeedProofofIdentity", maxCount: 1 },
  { name: "SelfEmployeedProofofResidence", maxCount: 1 },
  { name: "SelfEmployeedIncomeProof", maxCount: 1 },
  { name: "SelfEmployeedSixMonthBankStatement", maxCount: 1 },
  { name: "SelfEmployeedOfficeAddressProof", maxCount: 1 },
  { name: "SelfEmployeedProofofContinuityofBusiness", maxCount: 1 },
]);

const multipleUploadForMortgageLoan = upload.fields([
  { name: "latestSalarySlip", maxCount: 1 },
  { name: "threeMonthsBankStatement", maxCount: 1 },
  { name: "panCard", maxCount: 1 },
  { name: "idProof", maxCount: 1 },
  { name: "addressProof", maxCount: 1 },
  { name: "documentOfThePropertyTobeMortgage", maxCount: 1 },
  { name: "itReturns", maxCount: 1 },
]);

const multipleUploadForGoldLoan = upload.fields([
  { name: "Aadharcard", maxCount: 1 },
  { name: "Pancard", maxCount: 1 },
]);

const multipleUploadForCreditCard = upload.fields([
  { name: "AadharCard", maxCount: 1 },
  { name: "PanCard", maxCount: 1 },
  { name: "ThreeMonthsSalarySlip", maxCount: 1 },
  { name: "SixMonthsBankStatement", maxCount: 1 },
  { name: "FormSixteen", maxCount: 1 },
]);

// Lead Created
Route.post(
  "/createleadforHomeloan",
  employeeTokenCheck,
  multipleUploadForHomeLoan,
  CreateLeadctrlForHomeLoan
);

Route.post(
  "/createleadforBusinessLoan",
  employeeTokenCheck,
  multipleUploadForBusinessLoan,
  createLeadForBusinessLoanModel
);

Route.post(
  "/createleadforPersonalloan",
  employeeTokenCheck,
  multipleUploadForPersonalLoan,
  createLeadForPersonalLoan
);

Route.post(
  "/createleadforMortgageloan",
  employeeTokenCheck,
  multipleUploadForMortgageLoan,
  createLeadForMortgageLoan
);

Route.post(
  "/createleadforGoldloan",
  employeeTokenCheck,
  multipleUploadForGoldLoan,
  createLeadForGoldLoan
);

Route.post(
  "/createleadforCreditCard",
  employeeTokenCheck,
  multipleUploadForCreditCard,
  createLeadForCreditCard
);

// Get My Lead
// Route.get("/mylead", employeeTokenCheck, MyLeadsctrl);
Route.get(
  "/gethomeloanforemployee",
  employeeTokenCheck,
  getHomeLoanForEmployee
);
Route.get(
  "/getbusinessloanforemployee",
  employeeTokenCheck,
  getBusinessLoanForEmployee
);
Route.get(
  "/getpersonalloanforemployee",
  employeeTokenCheck,
  getPersonalLoanForEmployee
);
Route.get(
  "/getmortgageloanforemployee",
  employeeTokenCheck,
  getMortgageLoanForEmployee
);
Route.get(
  "/getgoldloanforemployee",
  employeeTokenCheck,
  getGoldLoanForEmployee
);
Route.get(
  "/getcreditcardforemployee",
  employeeTokenCheck,
  getCreditCardLoanForEmployee
);

// Edit Client List
Route.patch(
  "/updatehomeloan",
  employeeTokenCheck,
  editHomeLoanServiceController
);
Route.patch(
  "/updatebusinessloan",
  employeeTokenCheck,
  editBusinessLoanServiceController
);
Route.patch(
  "/updatepersonalloan",
  employeeTokenCheck,
  editPersonalLoanServiceController
);
Route.patch(
  "/updatemortgageloan",
  employeeTokenCheck,
  editMortgageLoanServiceController
);
Route.patch(
  "/updategoldloan",
  employeeTokenCheck,
  editGoldLoanServiceController
);
Route.patch(
  "/updatecreditcard",
  employeeTokenCheck,
  editCreditCardServiceController
);

export default Route;