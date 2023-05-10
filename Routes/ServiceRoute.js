import Express from "express";
import { CreateServicectrl, MyServicesctrl } from "../Controllers/ServiceCtrl.js";

const app = Express();

const Route = Express.Router();

// Lead Created 
Route.post("/createservice",CreateServicectrl);

// Get My Lead  
Route.get("/Service",MyServicesctrl);

export default Route