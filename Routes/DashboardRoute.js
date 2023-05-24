import Express from "express";
import { dashboardForTotolNumberofDocument, dashboardForTotolNumberofDocumentForAdmin } from "../Controllers/DashboardCtrl.js";
import { employeeTokenCheck } from "../Middleware/Tokencheck.js";
import { adminTokenCheck } from "../Middleware/TokencheckAdmin.js";

const app = Express();

const Route = Express.Router();

Route.get(
  "/getnumberofleadforallservice",
  employeeTokenCheck,
  dashboardForTotolNumberofDocument
);

Route.get("/getnumberofleadforallserviceadmin", adminTokenCheck, dashboardForTotolNumberofDocumentForAdmin)

export default Route;
