import Express from "express";
import { CreateServicectrl, MyServicesctrl, getServiceController } from "../Controllers/ServiceCtrl.js";
import { employeeTokenCheck } from "../Middleware/Tokencheck.js";

const app = Express();

const Route = Express.Router();

// Lead Created 
Route.post("/createservice",CreateServicectrl);

// Get My Lead  
Route.get("/Service",MyServicesctrl);

//get services 
Route.get("/getservice", employeeTokenCheck, getServiceController);

export default Route