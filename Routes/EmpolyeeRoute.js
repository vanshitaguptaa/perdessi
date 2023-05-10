import Express from "express";
import {  addemployee, employeelogin, getEmpolyeeID, getallemployee, updatepass } from "../Controllers/Empolyeectrls.js";
import { employeeTokenCheck } from "../Middleware/Tokencheck.js";


//rest object
const app = Express();

const route = Express.Router();

// get all employee route
route.get('/getallemployee', getallemployee);

// get my Emopyee ID
route.get('/getEmpolyeeID',employeeTokenCheck, getEmpolyeeID);
// add employee
route.post('/addemployee',addemployee);

// chnage password
route.patch('/updatepassword',updatepass);

//  employee Login
route.post('/employeelogin',employeelogin);


// Export

export default route