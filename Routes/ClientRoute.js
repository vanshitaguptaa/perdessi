import Express from "express";
import {
  Addclientctrl,
  EditClintsctrl,
  GetAllClintsctrl,
  MyClintsctrl,
  SendMAilTOAllctrl,
  getClientById,
  getClientForCurrentUser
} from "../Controllers/Clientctrl.js";
import { employeeTokenCheck } from "../Middleware/Tokencheck.js";

const app = Express();

const Route = Express.Router();

// Client Created
Route.post("/addclient", employeeTokenCheck, Addclientctrl);

//Send Mail to All Client 
Route.post("/sendmail", SendMAilTOAllctrl);

// Get All Client
Route.get("/getallclient", GetAllClintsctrl);

// My Client List
Route.get("/myclient/:id", MyClintsctrl);

// Edit Client List
Route.patch("/myclient/:id", EditClintsctrl);

// get client for employee who is login
Route.get("/getclientforemployee", employeeTokenCheck, getClientForCurrentUser);

// get client by id 
Route.get("/getclientbyid", employeeTokenCheck, getClientById);

export default Route;