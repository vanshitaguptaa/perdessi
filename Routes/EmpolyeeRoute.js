import Express from "express";
import {  addemployee, employeelogin, getEmpolyeeID, getEmpolyeeIDforadmin, getallemployee, updateempolyeedata, updatepass } from "../Controllers/Empolyeectrls.js";
import { employeeTokenCheck } from "../Middleware/Tokencheck.js";


//rest object
const app = Express();

const route = Express.Router();

// get all employee route
route.get('/getallemployee', getallemployee);

// get my Emopyee ID
route.get('/getEmpolyeeID',employeeTokenCheck, getEmpolyeeID);

// get my Emopyee ID
route.get('/getEmpolyeeIDforadmin/:id', getEmpolyeeIDforadmin);

// add employee
route.post('/addemployee',addemployee);

// chnage password
route.patch('/updatepassword/:id',updatepass);

// chnage empolyee
route.patch('/updateempolyee/:id',updateempolyeedata);

//  employee Login
route.post('/employeelogin',employeelogin);


// Export

export default route