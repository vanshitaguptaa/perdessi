import express from "express";
const router = express.Router();
import { employeeTokenCheck } from "../Middleware/Tokencheck.js";
import {
  createCommentForLead,
  getCommentByLeadid,
} from "../Controllers/CommentCtrl.js";

// add comment to lead
router.post("/addcommenttolead", employeeTokenCheck, createCommentForLead);

// get comment for particular lead
router.get("/getcommentoflead", employeeTokenCheck, getCommentByLeadid);


export default router